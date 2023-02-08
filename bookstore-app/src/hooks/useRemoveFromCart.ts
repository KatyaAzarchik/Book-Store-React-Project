import { useCallback } from "react";
import { removeBookFromCart } from "../features/cartSlice";
import { useAppDispatch } from "../store/store";

export const useRemoveFromCart = () => {
  const dispatch = useAppDispatch();
  const handleRemoveFromCart = useCallback(
    (isbn13: number) => {
      return dispatch(removeBookFromCart(isbn13));
    },
    [dispatch]
  );
  return { handleRemoveFromCart };
};
