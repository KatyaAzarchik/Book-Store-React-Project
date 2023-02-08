import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../store/store";
import "../userBar.scss";

export const Favorites = () => {
  const cartBookQuantity = useAppSelector(
    (state) => state.favoritesReducer.favorites.length
  );
  return (
    <div>
      <Link to={`/favorites`}>
        {cartBookQuantity > 0 ? (
          <div className="user-bar-icon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        ) : (
          <div className="user-bar-icon-empty">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        )}
      </Link>
    </div>
  );
};
