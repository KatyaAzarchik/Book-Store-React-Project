import { useEffect, useMemo } from "react";
import { getBooks } from "../features/paginationThunk";
import { useAppDispatch, useAppSelector } from "../store/store";
import debounce from "lodash.debounce";

export const useBooks = (query: string, page: number) => {
  const { books, total } = useAppSelector((state) => state.booksReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks(`query=${query}&page=${page}`));
  }, [dispatch, query, page]);

  const handleSubmitSearch = useMemo(
    () =>
      debounce((query: string) => {
        dispatch(getBooks(`query=${query}&page=${page}`));
      }, 500),
    [dispatch, query, page]
  );
  return {
    books,
    total,
    handleSubmitSearch,
  };
};
