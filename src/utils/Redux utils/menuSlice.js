import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resMenu: {},
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenu: (state, action) => {
      const resMenu = action.payload;
      state.resMenu[resMenu.id] = resMenu;
    },
  },
});

export const { addMenu } = menuSlice.actions;
export default menuSlice.reducer;
