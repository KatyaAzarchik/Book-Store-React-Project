import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addBookToFavorites } from "../store/apiSlice";
import { getBook } from "../store/bookThunk";
import { useAppDispatch } from "../store/store";

export const useBooks = () => {
  const dispatch = useAppDispatch();

  const handleFavoriveBook = useCallback(
    (isbn13: number) => {
      return dispatch(addBookToFavorites(isbn13));
    },
    [dispatch]
  );
  return { handleFavoriveBook };
};
