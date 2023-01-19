import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../userBar.scss";
export const Basket = () => {
  return (
    <div className="basket">
      <FontAwesomeIcon className="user-bar-icon" icon={faBasketShopping} />
    </div>
  );
};
