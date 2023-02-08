import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useBooks } from "../../../hooks/useBooks";
import { IBooks } from "../../../interfaces";
import { BookCard } from "../BookCard/BookCard";
import { Pagination } from "../../Pagination/Pagination";
import "./books.scss";

export const Books = () => {
  const [params] = useSearchParams();
  const query = 40;
  const [currentPage, setCurrentPage] = useState(
    Number(params.get("page")) || 1
  );
  const page = currentPage;
  const { books, total } = useBooks(query, page);
  const countOfPages = Math.ceil(total / query);

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
