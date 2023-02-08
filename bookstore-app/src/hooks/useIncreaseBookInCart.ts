import { useCallback } from "react";
import { increaseBookInCart } from "../features/cartSlice";
import { useAppDispatch } from "../store/store";

export const useIncreaseBookInCart = () => {
  const dispatch = useAppDispatch();
  const handleincreaseBookInCart = useCallback(
    (isbn13: number) => {
      return dispatch(increaseBookInCart(isbn13));
    },
    [dispatch]
  );
  return { handleincreaseBookInCart };
};
