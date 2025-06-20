import { useState, useRef, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";
import { useSelector } from "react-redux";
import { PLAYLIST_ICON } from "../utils/consonants";

const RestaurantMenu = () => {
  const { resid } = useParams();
  useRestaurantMenu(resid);

  const menuData = useSelector((store) => store.menu.resMenu[resid]);
  const [showIndex, setShowIndex] = useState(null);
  const [visibleCategories, setVisibleCategories] = useState([]);

  const observer = useRef();
  const lastElementRef = useRef();

  const handleToggle = (index) => {
    setShowIndex(index === showIndex ? null : index);
  };

  const categories = useMemo(() => {
    return (
      menuData?.cards?.filter(
        (item) =>
          item.card.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || []
    );
  }, [menuData]);

  useEffect(() => {
    if (!menuData) return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setVisibleCategories((prev) => {
            if (!prev.includes(index)) return [...prev, index];
            return prev;
          });
        }
      });
    };

    observer.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const nodes = document.querySelectorAll(".lazy-category");
    nodes.forEach((node) => observer.current.observe(node));

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [menuData]);

  if (!menuData) return <ShimmerRestaurantMenu />;

  const { name, cloudinaryImageId, costForTwoMessage, cuisines } = menuData;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 text-center dark:text-gray-200">
      {/* Banner */}
      <div className="w-full rounded-xl overflow-hidden shadow-lg mb-6">
        <img
          src={
            cloudinaryImageId
              ? PLAYLIST_ICON + cloudinaryImageId
              : "https://via.placeholder.com/400x200?text=No+Image"
          }
          alt="Restaurant Banner"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-1">
        {name}
      </h1>
      <h2 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-6">
        {cuisines.join(", ")} • {costForTwoMessage}
      </h2>

      {/* Categories */}
      <div className="space-y-6">
        {categories.map((item, i) => (
          <div
            key={i}
            data-index={i}
            className={`lazy-category transition-all duration-500 ${
              visibleCategories.includes(i) ? "opacity-100" : "opacity-0"
            }`}
            ref={i === categories.length - 1 ? lastElementRef : null}
          >
            <RestaurantCategory
              index={i}
              title={item?.card?.card.title}
              itemCards={item?.card?.card.itemCards}
              showIndex={showIndex}
              handleToggle={handleToggle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
