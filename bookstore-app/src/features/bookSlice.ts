import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialBookState } from "../interfaces";
import { getBooks, IBooksResponse } from "./paginationThunk";
import { getBook } from "./bookThunk";

const initialState: IInitialBookState = {
  loading: false,
  books: [],
  book: undefined,
  error: null,
  total: 0,
  page: 1,
  query: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
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
export const {} = booksSlice.actions;

export default booksSlice.reducer;
