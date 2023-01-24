import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addBookToFavorites, removeBookToFavorites } from "../store/apiSlice";
import { getBook } from "../store/bookThunk";
import { useAppDispatch } from "../store/store";

export const useAddFavoriteBook = () => {
  const dispatch = useAppDispatch();

  const handleFavoriveBook = useCallback(
    (state: {}) => {
      return dispatch(addBookToFavorites(state));
    },
    [dispatch]
  );
  return { handleFavoriveBook };
};
export const useRemoveFavoriteBook = () => {
  const dispatch = useAppDispatch();

  const handleRemoveFavoriveBook = useCallback(
    (isbn13: number) => {
      return dispatch(removeBookToFavorites(isbn13));
    },
    [dispatch]
  );
  return { handleRemoveFavoriveBook };
};
