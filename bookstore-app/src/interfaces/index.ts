import { ReactElement } from "react";

export interface ILogo {
  logo: string;
}
export interface ISearch {
  faCoffee: string;
}
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
}
export interface IBook extends IBooks {
  authors: string;
  desc: string;
  isbn10?: number;
  language: string;
  pages?: string;
  publisher: string;
  rating: string;
  year: string;
}

export interface IBooksPages {
  results: IBooks[];
}
export interface IFavoriteBook {
  isbn13: number;
  isFavorite: false;
}
export interface IFavoriteList {
  favoritesTitle: string;
}
export interface IInitialApiState {
  favorites: IBook[];
  loading: null | boolean;
  book: any;
  books: IBooks[];
  error: null | string;
  total: number;
}
export interface IInitialFavoritesState {
  favorites: IBook[];
}
export interface IBooksTitle {
  title: string;
}
export interface ITabs {
  props: any;
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
}

export interface ITabProps {
  children: ReactElement<ITabs>[];
  preSelectedTabIndex?: number;
}
export interface ITab {
  title: string;
  children: ReactElement | ReactElement[];
}
export interface IModal {
  modalImg: string;
  active: boolean;
  setModalActive: boolean | any;
}
export interface IPaginaton {
  countOfPages: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}
export interface IPostsResponse {
  results: IBooks[];
  count: number;
}
