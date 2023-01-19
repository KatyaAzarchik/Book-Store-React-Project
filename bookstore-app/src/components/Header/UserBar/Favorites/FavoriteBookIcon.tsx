import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useBooks } from "../../../../hooks/useBooks";
import { IFavoriteBook } from "../../../../interfaces";
import "./favorites.scss";

export const FavoriteBookIcon = (props: IFavoriteBook) => {
  const { handleFavoriveBook } = useBooks();
  return (
    <button
      className="favorite-icon-container"
      onClick={() => handleFavoriveBook(Number(props.isbn13))}
    >
      <FontAwesomeIcon
        className={props.isbn13 ? "favorite-icon" : "favorite-icon-fav"}
        icon={faHeart}
      />
    </button>
  );
};
