import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialfavoritesState } from "../interfaces";

const initialState: IInitialfavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addBookToFavorites(
      state: IInitialfavoritesState,
      action: PayloadAction<any>
    ) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeBookFromFavorites(
      state: IInitialfavoritesState,
      action: PayloadAction<any>
    ) {
      state.favorites = state.favorites.filter(
        (book) => book.isbn13 !== action.payload
      );
    },
  },
});
export const { addBookToFavorites, removeBookFromFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
