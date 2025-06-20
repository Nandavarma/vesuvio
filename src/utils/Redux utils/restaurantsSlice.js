import { createSlice } from "@reduxjs/toolkit";
const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurantsList: [],
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.restaurantsList.push(action.payload);
    },
  },
});
export const { addRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
