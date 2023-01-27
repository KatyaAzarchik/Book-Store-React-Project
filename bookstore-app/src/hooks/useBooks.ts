import { useEffect } from "react";
import { getBooks } from "../store/paginationThunk";
import { useAppDispatch, useAppSelector } from "../store/store";

export const useBooks = (query: number, page: number) => {
  const { books, total } = useAppSelector((state) => state.booksReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBooks(`query=${query}&page=${page}`));
  }, [dispatch, query, page]);

  return {
    books,
    total,
  };
};
