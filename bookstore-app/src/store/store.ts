import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import logger from "redux-logger";
import booksReducer from "../features/bookSlice";
import favoritesReducer from "../features/favoriteSlice";
import cartReducer from "../features/cartSlice";
import authReducer from "./auth/authReducer";
import registrationReducer from "../features/registrationSlice";

const rootReducer = combineReducers({
  booksReducer,
  favoritesReducer,
  cartReducer,
  authReducer,
  registrationReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat
      // ...(process.env.NODE_ENV !== "production" ? [logger] : [])
      (),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
