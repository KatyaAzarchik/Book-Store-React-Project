import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../userBar.scss";
import { Link } from "react-router-dom";

export const Favorites = () => {
  return (
    <div>
      <Link to={`/favorites`}>
        <FontAwesomeIcon className="user-bar-icon" icon={faHeart} />
      </Link>
    </div>
  );
};
