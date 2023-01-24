import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAddFavoriteBook } from "../../../../hooks/useFavBooks";
import { IBooks } from "../../../../interfaces";
import "./favorites.scss";
import { booksFavovitesSelector } from "../../../../store/selectors";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../../store/store";
import { useState } from "react";

export const FavoriteBookIcon = (props: IBooks) => {
  const favoritesBooksList = useAppSelector(booksFavovitesSelector);
  // const [favorite, setFavoriteBook] = useState (favoritesBooksList.map((item) => item.isbn13 === props.isbn13));

  // const handleSetFavoriteBook = () => {
  //   setFavoriteBook(!favorite);
  // };
  const { handleFavoriveBook } = useAddFavoriteBook();

  return (
    <button
      className="favorite-icon-container"
      onClick={() => handleFavoriveBook(props)}
    >
      <FontAwesomeIcon
        className={props.isbn13 ? "favorite-icon" : "favorite-icon-fav"}
        icon={faHeart}
      />
    </button>
  );
};
