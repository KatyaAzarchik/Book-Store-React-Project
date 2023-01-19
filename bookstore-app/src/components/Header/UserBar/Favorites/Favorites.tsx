import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../userBar.scss";

export const Favorites = () => {
  return (
    <div>
      <FontAwesomeIcon className="user-bar-icon" icon={faHeart} />
    </div>
  );
};
