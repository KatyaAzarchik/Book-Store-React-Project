import { useState } from "react";
import { BookCard } from "./BookCard/BookCard";
import "./books.scss";
import { Link, useSearchParams } from "react-router-dom";
import { IBooks } from "../../interfaces";
import { Pagination } from "../Pagination/Pagination";
import { useBooks } from "../../hooks/useBooks";
export const Books = () => {
  const [params] = useSearchParams();
  // const books = useSelector(booksSelector);
  const limitPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const currentOffset = currentPage > 1 ? (currentPage - 1) * limitPerPage : 0;
  // const books = useBooks(limitPerPage, currentOffset);
  const { books, count } = useBooks(limitPerPage, currentOffset);
  const countOfPages = Math.ceil(count / limitPerPage);

  return (
    <>
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
      <Pagination
        countOfPages={countOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
export default Books;
