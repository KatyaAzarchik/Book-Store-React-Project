import { useCallback } from "react";
import { decreaseBookInCart } from "../features/cartSlice";
import { useAppDispatch } from "../store/store";

export const useDecreaseBookInCart = () => {
  const dispatch = useAppDispatch();
  const handleDecreaseBookInCart = useCallback(
    (isbn13: number) => {
      return dispatch(decreaseBookInCart(isbn13));
    },
    [dispatch]
  );
  return { handleDecreaseBookInCart };
};
