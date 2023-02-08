import { ChangeEvent, useEffect } from "react";
import { getBooks } from "../features/paginationThunk";
import { useAppDispatch, useAppSelector } from "../store/store";

export const useBooks = (query: number, page: number) => {
  const { books, total } = useAppSelector((state) => state.booksReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBooks(`query=${query}&page=${page}`));
  }, [dispatch, query, page]);

  const handleSubmitSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getBooks(`${e.target.value}&query=${query}`));
    e.preventDefault();
  };
  return {
    books,
    total,
    handleSubmitSearch,
  };
};
