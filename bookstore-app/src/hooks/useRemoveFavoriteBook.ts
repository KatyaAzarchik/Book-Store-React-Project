import { useCallback } from "react";
import { removeBookFromFavorites } from "../features/favoriteSlice";
import { useAppDispatch } from "../store/store";

export const useRemoveFavoriteBook = () => {
  const dispatch = useAppDispatch();

  const handleRemoveFavoriveBook = useCallback(
    (isbn13: number) => {
      return dispatch(removeBookFromFavorites(isbn13));
    },
    [dispatch]
  );
  return { handleRemoveFavoriveBook };
};
