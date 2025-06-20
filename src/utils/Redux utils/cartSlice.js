import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    frequencyTotal: 0,
    totalCost: 69,
  },
  reducers: {
    addItem: (state, action) => {
      const { id, item } = action.payload;
      if (state?.items[id]) {
        state.items[id].frequency += 1;
        state.frequencyTotal += 1;
      } else {
        state.items[id] = { ...item, frequency: 1 };
        state.frequencyTotal += 1;
      }
      state.totalCost += state.items[id].card.info?.price
        ? state.items[id].card.info.price / 100
        : state.items[id].card.info.defaultPrice / 100;
    },
    decreaseItem(state, action) {
      const { id } = action.payload;
      if (state?.items[id]) {
        if (state.items[id].frequency > 0) state.items[id].frequency -= 1;
        state.frequencyTotal -= 1;
        state.totalCost -= state.items[id].card.info?.price
          ? state.items[id].card.info.price / 100
          : state.items[id].card.info.defaultPrice / 100;
      }
      if (state.items[id] && state?.items[id].frequency == 0) {
        cartSlice.caseReducers.removeItem(state, action);
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload.id];
    },
    clearItems: (state) => {
      state.items = {};
      state.frequencyTotal = 0;
      state.totalCost = 0;
    },
  },
});
export const { addItem, decreaseItem, removeItem, clearItems } =
  cartSlice.actions;
export default cartSlice.reducer;
