import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppThunk } from '../store';
import { IBooks, SearchParams } from "../interfaces/index";
// import { searchBooks } from '../api';

interface SearchState {
  isLoading: boolean;
  error: string | null;
  books: IBooks[];
  total: number;
  currentPage: number;
  searchParams: SearchParams;
}

const initialState: SearchState = {
  isLoading: false,
  error: null,
  books: [],
  total: 0,
  currentPage: 1,
  searchParams: {
    query: "",
    page: 1,
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchStart(state) {
      state.isLoading = true;
      state.error = null;
      state.books = [];
      state.total = 0;
    },
    searchSuccess(
      state,
      action: PayloadAction<{ books: IBooks[]; total: number }>
    ) {
      state.isLoading = false;
      state.books = action.payload.books;
      state.total = action.payload.total;
    },
    searchFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      state.searchParams.page = action.payload;
    },
    setSearchParams(state, action: PayloadAction<SearchParams>) {
      state.searchParams = action.payload;
    },
  },
});

export const {
  searchStart,
  searchSuccess,
  searchFailure,
  setPage,
  setSearchParams,
} = searchSlice.actions;

export default searchSlice.reducer;
