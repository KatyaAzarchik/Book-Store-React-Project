import { useDecreaseBookInCart } from "../../../hooks/useDecreaseBookInCart";
import { useIncreaseBookInCart } from "../../../hooks/useIncreaseBookInCart";
import "./cartCount.scss";

type CartCount = {
  isbn13: Number;
  bookCount: number;
};

export const CartCount = (props: CartCount) => {
  const { handleincreaseBookInCart } = useIncreaseBookInCart();
  const { handleDecreaseBookInCart } = useDecreaseBookInCart();
  return (
    <div className="cart-count-wrapp">
      <>
        <button
          onClick={() => handleDecreaseBookInCart(Number(props.isbn13))}
          className="cart-count-button"
        >
          -
        </button>
        <div className="cart-count-quantity">{props.bookCount}</div>
        <button
          onClick={() => handleincreaseBookInCart(Number(props.isbn13))}
          className="cart-count-button"
        >
          +
        </button>
      </>
    </div>
  );
};
