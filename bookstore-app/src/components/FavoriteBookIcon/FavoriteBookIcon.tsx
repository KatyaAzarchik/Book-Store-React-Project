import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAddFavoriteBook } from "../../hooks/useAddFavoriteBook";
import { IBook } from "../../interfaces";
import "./favoriteBookIcon.scss";
import { useAppSelector } from "../../store/store";
import { useRemoveFavoriteBook } from "../../hooks/useRemoveFavoriteBook";

export const FavoriteBookIcon = (props: IBook) => {
  const isBookInFavorites = useAppSelector((state) =>
    state.favoritesReducer.favorites.find(
      (book) => book.isbn13 === props.isbn13
    )
  );
  const { handleFavoriveBook } = useAddFavoriteBook();
  const { handleRemoveFavoriveBook } = useRemoveFavoriteBook();

  return (
    <button className="favorite-icon-container">
      <FontAwesomeIcon
        onClick={() =>
          isBookInFavorites
            ? handleRemoveFavoriveBook(Number(props.isbn13))
            : handleFavoriveBook(props)
        }
        className={isBookInFavorites ? "favorite-icon-fav" : "favorite-icon"}
        icon={faHeart}
      />
    </button>
  );
};
