import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialFavoritesState } from "../interfaces";

const initialState: IInitialFavoritesState = {
  favorites: [],
};

export const booksSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    addBookToFavorites(
      state: IInitialFavoritesState,
      action: PayloadAction<any>
    ) {
      // state.favorites.push(state.book);
    },
  },
});
