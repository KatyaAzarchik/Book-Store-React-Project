import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialCartState } from "../interfaces";

const initialState: IInitialCartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addBookToCart(state: IInitialCartState, action: PayloadAction<any>) {
      // state.cart = [...state.cart, action.payload];
      state.cart.push({
        bookCount: 1,
        ...action.payload,
      });
    },

    increaseBookInCart(state: IInitialCartState, action: PayloadAction<any>) {
      state.cart = state.cart.map((item) => {
        return item.isbn13 === action.payload
          ? { ...item, bookCount: Number(item.bookCount) + 1 }
          : { ...item, bookCount: Number(item.bookCount) };
      });
    },
    decreaseBookInCart(state: IInitialCartState, action: PayloadAction<any>) {
      state.cart = state.cart.map((item) => {
        return item.isbn13 === action.payload && Number(item.bookCount) > 1
          ? { ...item, bookCount: Number(item.bookCount) - 1 }
          : { ...item, bookCount: Number(item.bookCount) };
      });
    },
    removeBookFromCart(state: IInitialCartState, action: PayloadAction<any>) {
      state.cart = state.cart.filter((book) => book.isbn13 !== action.payload);
    },
  },
});
export const {
  addBookToCart,
  removeBookFromCart,
  increaseBookInCart,
  decreaseBookInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
