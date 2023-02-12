export interface IBooks {
  id?: number;
  title: string;
  subtitle: string;
  isbn13: number;
  price: string;
  image: string;
  url?: string;
  books?: [];
  count?: number;
  bookCount?: number;
}
export interface IBook extends IBooks {
  authors?: string;
  desc?: string;
  isbn10?: number;
  language?: string;
  pages?: string;
  publisher?: string;
  rating?: string;
  year?: string;
}
export interface IInitialfavoritesState {
  favorites: IBook[];
}
export interface IInitialCartState {
  cart: IBook[];
}

export interface IInitialBookState {
  loading: null | boolean;
  book: any;
  books: IBooks[];
  error: null | string;
  total: number;
  page: number;
  query: string;
}
export interface IInitialFavoritesState {
  favorites: IBook[];
}
export interface ICartBookQuantity {
  bookQuantity: number;
}
export interface SearchParams {
  query: string;
  page: number;
}
