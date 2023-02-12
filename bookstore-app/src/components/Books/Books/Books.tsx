import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useSearchParams } from "react-router-dom";
import { useBooks } from "../../../hooks/useBooks";
import { IBooks } from "../../../interfaces";
import { BookCard } from "../BookCard/BookCard";
import { Pagination } from "../../Pagination/Pagination";
import "./books.scss";

export const Books = () => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("new");
  const [params] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    Number(params.get("page")) || 1
  );
  const page = currentPage;
  const { books, total, handleSubmitSearch } = useBooks(query, page);
  const countOfPages = Math.ceil(total / 200);
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    handleSubmitSearch(value);
    setQuery(value);
  };
  return (
    <>
      <form
        style={{
          display: "inline-flex",
          border: "1px solid rgba(231, 231, 231, 1)",
          color: "rgba(168, 168, 168, 1)",
        }}
        className="search-form"
      >
        <input
          value={searchValue}
          onChange={handleChangeSearch}
          className="search-input"
          placeholder="Search"
          type="text"
          style={{
            width: "542px",
            padding: "10px 20px",
            border: "0",
            outline: "none",
          }}
        />
        <FontAwesomeIcon
          style={{
            fontSize: "1.25rem",
            color: "rgba(49, 48, 55, 1)",
            margin: "auto",
            padding: "10px 20px",
          }}
          className="serch-icon"
          icon={faSearch}
        />
      </form>
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
