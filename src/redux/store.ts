import { configureStore } from "@reduxjs/toolkit";
import beerReducer from "./beerSlice";

const store = configureStore({
  reducer: { beers: beerReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
