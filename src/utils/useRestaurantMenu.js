import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MENU_API } from "./consonants";
import { addMenu } from "./Redux utils/menuSlice";

const useRestaurantMenu = (id) => {
  const dispatch = useDispatch();
  const menu = useSelector((store) => store.menu.resMenu);
  useEffect(() => {
    if (!menu[id]) {
      fetchData();
    }
  }, []);
  const fetchData = async () => {
    const resMenu = await fetch(MENU_API + id);
    const jsonData = await resMenu.json();
    const path = jsonData.data?.cards[2]?.card?.card?.info;
    const menuCard =
      jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    const menuData = {
      id: path.id,
      name: path.name,
      cuisines: path.cuisines,
      avgRating: path.avgRating,
      costForTwoMessage: path.costForTwoMessage,
      totalRatingsString: path.totalRatingsString,
      cloudinaryImageId: path.cloudinaryImageId,
      cards: menuCard.cards,
    };

    dispatch(addMenu(menuData));
  };
};
export default useRestaurantMenu;
