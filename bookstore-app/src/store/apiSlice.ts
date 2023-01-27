import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { IBook, IInitialApiState } from "../interfaces";
import { getBooks, IBooksResponse } from "./paginationThunk";
import { getBook } from "./bookThunk";

const initialState: IInitialApiState = {
  loading: false,
  books: [],
  book: undefined,
  error: null,
  favorites: [],
  total: 0,
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
  extraReducers(builder) {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getBooks.fulfilled,
      (state, action: PayloadAction<IBooksResponse | any>) => {
        state.loading = false;
        state.books = action.payload.books;
        state.total = action.payload.total;
      }
    );
    builder.addCase(getBooks.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getBook.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBook.fulfilled, (state, action) => {
      state.loading = false;
      state.book = action.payload;
    });
    builder.addCase(getBook.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { addBookToFavorites, removeBookToFavorites } = booksSlice.actions;

export default booksSlice.reducer;
