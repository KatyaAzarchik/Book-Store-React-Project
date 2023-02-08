import { Link } from "react-router-dom";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../../store/store";
import "../userBar.scss";
export const Cart = () => {
  const cartBookQuantity = useAppSelector(
    (state) => state.cartReducer.cart.length
  );
  return (
    <div className="basket">
      <Link to={`/cart`}>
        {cartBookQuantity > 0 ? (
          <div className="user-bar-icon">
            <FontAwesomeIcon icon={faBasketShopping} />
          </div>
        ) : (
          <div className="user-bar-icon-empty">
            <FontAwesomeIcon icon={faBasketShopping} />
          </div>
        )}
      </Link>
    </div>
  );
};
