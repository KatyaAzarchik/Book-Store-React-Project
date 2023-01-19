import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IInitialApiState } from "../interfaces";
import { getBooks } from "./booksThunk";
import { getBook } from "./bookThunk";
import { IBook } from "../interfaces";

const initialState: IInitialApiState = {
  loading: false,
  books: [],
  book: undefined,
  error: null,
  favorites: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBookToFavorites(state: IInitialApiState, action: PayloadAction<any>) {
      const bookIsbn13 = action.payload;
      state.favorites = state.favorites.includes(bookIsbn13)
        ? state.favorites.filter((isbn13) => isbn13 !== bookIsbn13)
        : [...state.favorites, bookIsbn13];

      console.log(state.favorites);
      console.log(bookIsbn13);
    },
    // removeBookFromFavorites(
    //   state: IInitialApiState,
    //   action: PayloadAction<any>
    // ) {
    //   const bookIsbn13 = action.payload;
    //   state.favorites = state.favorites.includes(bookIsbn13)
    //     ? state.favorites.filter((isbn13) => isbn13 !== bookIsbn13)
    //     : [...state.favorites, bookIsbn13];
    // },
  },
  extraReducers: {
    [getBooks.pending.type]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
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
export const { addBookToFavorites } = booksSlice.actions;
export default booksSlice.reducer;
