import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IBook, IFavoriteBook, IFavoriteList } from "../../interfaces";
import { getBook } from "../../store/bookThunk";
import { bookSelector, booksFavovitesSelector } from "../../store/selectors";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addBookToFavorites } from "../../store/apiSlice";
import "./favoritesPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRemoveFavoriteBook } from "../../hooks/useFavBooks";
export const FavoritesPage = (prop: IFavoriteList) => {
  const favoritesBooksList = useSelector(booksFavovitesSelector);
  const { handleRemoveFavoriveBook } = useRemoveFavoriteBook();

  return (
    <div className="favorites-page">
      <div className="container">
        <h1 className="favorites-page-title">{prop.favoritesTitle}</h1>
        {favoritesBooksList.map((item: IBook, index) => {
          return (
            <ul className="favorites-wrapp" key={index}>
              <li className="favorites-wrapp-item">
                <div className="favorites-wrapp-item-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="favorites-item-content">
                  <h3 className="favorites-item-title">{item.title}</h3>
                  <span className="favorites-item-authors">{item.authors}</span>
                  <div className="favorites-item-price">{item.price}</div>
                </div>
                <div>
                  <FontAwesomeIcon
                    className="favorites-page-icon"
                    icon={faHeart}
                    onClick={() =>
                      handleRemoveFavoriveBook(Number(item.isbn13))
                    }
                  />
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
