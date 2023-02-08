import { useCallback } from "react";
import { addBookToCart } from "../features/cartSlice";
import { useAppDispatch } from "../store/store";

export const useAddToCart = () => {
  const dispatch = useAppDispatch();

  const handleAddToCart = useCallback(
    (state: {}) => {
      return dispatch(addBookToCart(state));
    },
    [dispatch]
  );
  return { handleAddToCart };
};
