import { RootState } from "./store";

export const booksSelector = (state: RootState) => state.booksReducer.books;
export const booksCountSelector = (state: RootState) =>
  state.booksReducer.count;
export const bookSelector = (state: RootState) => state.booksReducer.book;
export const booksFavovitesSelector = (state: RootState) =>
  state.booksReducer.favorites;
