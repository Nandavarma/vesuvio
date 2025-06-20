import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESTAURANTS_API } from "./consonants";
import { addRestaurants } from "./Redux utils/restaurantsSlice";

const useRestaurants = () => {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.restaurants.restaurantsList[0]);
  useEffect(() => {
    if (!list) {
      fetchData();
    }
  }, [list]);
  const fetchData = async () => {
    const restaurants = await fetch(RESTAURANTS_API);
    const json = await restaurants.json();
    dispatch(addRestaurants(json));
  };
};
export default useRestaurants;
