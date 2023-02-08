import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { IBook } from "../../interfaces";
import { booksFavovitesSelector } from "../../store/selectors";
import { useRemoveFavoriteBook } from "../../hooks/useRemoveFavoriteBook";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { Rating } from "../../components/Rating/Rating";
import "./favoritesPage.scss";

type FavoriteList = {
  favoritesTitle: string;
};

export const FavoritesPage = (props: FavoriteList) => {
  const favoritesBooksList = useSelector(booksFavovitesSelector);
  const { handleRemoveFavoriveBook } = useRemoveFavoriteBook();

  return (
    <>
      <div className="favorites-page">
        <div className="container">
          <BackArrow />
          <h1 className="favorites-page-title">{props.favoritesTitle}</h1>
          {favoritesBooksList.length === 0 ? (
            <h2>There are no products in "Favorites" yet.</h2>
          ) : (
            <ul className="favorites-wrapp">
              {favoritesBooksList.map((book: IBook, index) => {
                return (
                  <li className="favorites-wrapp-item" key={index}>
                    <Link to={`/books/${book.isbn13}`}>
                      <div className="favorites-wrapp-item-content">
                        <div className="favorites-wrapp-item-img">
                          <img src={book.image} alt={book.title} />
                        </div>
                        <div className="favorites-item-content">
                          <h3 className="favorites-item-title">{book.title}</h3>
                          <span className="favorites-item-authors">
                            {book.authors}
                          </span>
                          <div className="favorites-item-price-wrapp">
                            <div className="favorites-item-price">
                              {book.price}
                            </div>
                            <Rating rate={Number(book.rating)} />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <FontAwesomeIcon
                        className="favorites-page-icon"
                        icon={faHeart}
                        onClick={() =>
                          handleRemoveFavoriveBook(Number(book.isbn13))
                        }
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
