import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productReducer from "./features/productSlice";
import homeReducer from "./features/homeSlice";

export const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
    homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
