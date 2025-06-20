import PlaylistCard, { newPromotedCard } from "./Playlistcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useMemo } from "react";

function Mainbody() {
  useRestaurants();

  const fullList = useSelector((store) => store.restaurants?.restaurantsList);
  const resList = useMemo(() => fullList?.[0] || [], [fullList]);

  const [searchRestaurant, setSearchRestaurant] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    vegOnly: false,
    highRating: false,
  });

  const PromotedRestaurantCard = newPromotedCard(PlaylistCard);

  useEffect(() => {
    let filtered = Array.isArray(resList) ? [...resList] : [];

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((item) =>
        item?.info?.name
          ?.toLowerCase()
          ?.includes(searchTerm.trim().toLowerCase())
      );
    }

    if (filters.vegOnly) {
      filtered = filtered.filter((item) => item?.info?.veg === true);
    }

    if (filters.highRating) {
      filtered = filtered.filter(
        (item) => parseFloat(item?.info?.avgRating) > 4
      );
    }

    setSearchRestaurant(filtered);
  }, [resList, searchTerm, filters]);

  if (!resList || resList.length === 0) return <Shimmer />;

  return (
    <div className="mainbody bg-emerald-100 dark:bg-slate-800 min-h-screen transition-colors duration-300">
      {/* Search and Filters */}
      <div className="options-div flex flex-col items-center pt-8 px-4 gap-4">
        {/* Search Box */}
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search your restaurant..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-full bg-white dark:bg-slate-700 dark:text-white text-gray-800 shadow-md dark:shadow-emerald-500/20 border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap justify-center">
          <button
            className={`px-4 py-1 rounded-full font-medium transition-all border ${
              filters.vegOnly
                ? "bg-emerald-500 text-white"
                : "bg-white dark:bg-slate-700 text-gray-800 dark:text-white border-gray-300 dark:border-slate-600"
            }`}
            onClick={() =>
              setFilters((prev) => ({ ...prev, vegOnly: !prev.vegOnly }))
            }
          >
            Veg Only
          </button>

          <button
            className={`px-4 py-1 rounded-full font-medium transition-all border ${
              filters.highRating
                ? "bg-emerald-500 text-white"
                : "bg-white dark:bg-slate-700 text-gray-800 dark:text-white border-gray-300 dark:border-slate-600"
            }`}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                highRating: !prev.highRating,
              }))
            }
          >
            Rating 4+
          </button>

          <button
            className="px-4 py-1 rounded-full font-medium transition-all border border-red-300 dark:border-red-500 text-red-500 bg-white dark:bg-slate-700"
            onClick={() => {
              setSearchTerm("");
              setFilters({ vegOnly: false, highRating: false });
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Playlist */}
      <div className="playlist-container flex flex-wrap justify-center gap-6 mt-10 px-6 sm:px-[8vw] pb-14">
        {searchRestaurant.length > 0 ? (
          searchRestaurant.map((item, idx) => {
            if (!item?.info) return null;

            const isPromoted =
              item?.info?.aggregatedDiscountInfoV3?.header?.includes("OFF");
            const CardComponent = isPromoted
              ? PromotedRestaurantCard
              : PlaylistCard;

            return (
              <motion.div
                key={item?.info?.id || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(16,185,129,0.3)",
                }}
              >
                <Link to={`/restaurants/${item?.info?.id}`}>
                  <CardComponent dataofplaylist={item} />
                </Link>
              </motion.div>
            );
          })
        ) : (
          <p className="text-center text-lg font-semibold text-gray-600 dark:text-gray-300 mt-8">
            No restaurants match your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default Mainbody;
