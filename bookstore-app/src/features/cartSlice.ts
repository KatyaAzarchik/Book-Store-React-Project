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
      state.cart = [...state.cart, { bookCount: 1, ...action.payload }];
    },

    increaseBookInCart(state: IInitialCartState, action: PayloadAction<any>) {
      state.cart = state.cart.map((item) => {
        const count = Number(item.bookCount);
        return item.isbn13 === action.payload
          ? { ...item, bookCount: count + 1 }
          : { ...item, bookCount: count };
      });
    },
    decreaseBookInCart(state: IInitialCartState, action: PayloadAction<any>) {
      state.cart = state.cart.map((item) => {
        const count = Number(item.bookCount);
        return item.isbn13 === action.payload && count > 1
          ? { ...item, bookCount: count - 1 }
          : { ...item, bookCount: count };
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
