import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { getBooks } from "../../store/booksThunk";
import { booksSelector } from "../../store/selectors";
import { BookCard } from "./BookCard/BookCard";
import "./books.scss";
import { Link } from "react-router-dom";
import { IBooks } from "../../interfaces";

export const Books = () => {
  const books = useSelector(booksSelector);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  console.log(books);
  return (
    <ul className="book-list-wpapp">
      {books.map((book: IBooks) => {
        return (
          <li className="book-card" id={`${book.isbn13}`} key={book.isbn13}>
            <Link to={`/books/${book.isbn13}`}>
              <BookCard
                id={Number(book.id)}
                title={book.title}
                subtitle={book.subtitle}
                price={book.price}
                image={book.image}
                isbn13={Number(book?.isbn13)}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Books;
