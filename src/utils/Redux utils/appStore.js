import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantsSlice from "./restaurantsSlice";
import menuSlice from "./menuSlice";
import authSlice from "./authSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    restaurants: restaurantsSlice,
    menu: menuSlice,
    auth: authSlice,
  },
});
export default appStore;
