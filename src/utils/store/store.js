import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import appSlice from "../slices/appSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    app: appSlice,
  },
});

export default store;
