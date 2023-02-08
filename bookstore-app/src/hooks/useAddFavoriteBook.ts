import { useCallback } from "react";
import { addBookToFavorites } from "../features/favoriteSlice";
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
