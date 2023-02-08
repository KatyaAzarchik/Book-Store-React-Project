import { booksCartSelector } from "../../../store/selectors";
import { useAppSelector } from "../../../store/store";

export const CartTotal = () => {
  const CartBooksList = useAppSelector(booksCartSelector);
  const totalSum = CartBooksList.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    const priceOfItem = price * Number(item.bookCount);
    const totalPrice = +(acc += priceOfItem);
    return +totalPrice.toFixed(2);
  }, 0);
  return (
    <div className="cart-total-wrapp">
      <div
        style={{ padding: "0 0 25px 0" }}
        className="cart-sum-total"
      >{`Total: $${totalSum}`}</div>
    </div>
  );
};
