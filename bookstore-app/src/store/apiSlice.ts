import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { IBook, IInitialApiState } from "../interfaces";
import { getBooks, IBooksResponse } from "./booksThunk";
import { getBook } from "./bookThunk";

const initialState: IInitialApiState = {
  loading: false,
  books: [],
  book: undefined,
  error: null,
  favorites: [],
  count: 0,
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBookToFavorites(state: IInitialApiState, action: PayloadAction<any>) {
      state.favorites.push(state.book);
    },
    removeBookToFavorites(state: IInitialApiState, action: PayloadAction<any>) {
      const removeBookToFavorites = state.favorites.find((item) =>
        state.favorites.pop()
      );
    },
  },
  extraReducers: {
    [getBooks.pending.type]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled.type]: (
      state,
      action: PayloadAction<IBooksResponse | any>
    ) => {
      state.loading = false;
      state.books = action.payload;
      state.count = action.payload.count;
      console.log(`action.payload.results`);
      console.log(action.payload);
    },
    [getBooks.rejected.type]: (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getBook.pending.type]: (state) => {
      state.loading = true;
    },
    [getBook.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.book = action.payload;
    },
    [getBook.rejected.type]: (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { addBookToFavorites, removeBookToFavorites } = booksSlice.actions;

export default booksSlice.reducer;
