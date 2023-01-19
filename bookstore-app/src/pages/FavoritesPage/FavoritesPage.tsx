import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IFavoriteBook } from "../../interfaces";
import { getBook } from "../../store/bookThunk";
import { bookSelector, booksFavovitesSelector } from "../../store/selectors";
import { useAppDispatch } from "../../store/store";
import { addBookToFavorites } from "../../store/apiSlice";
export const FavoritesPage = (props: IFavoriteBook) => {
  const book = useSelector(bookSelector);

  const dispatch = useAppDispatch();
  const { isbn13 } = useParams();
  useEffect(() => {
    dispatch(getBook(Number(isbn13)));
  }, []);

  const favoritesBooksList = useSelector(booksFavovitesSelector);

  return <div>{}</div>;
};
