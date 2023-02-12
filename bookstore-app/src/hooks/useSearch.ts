import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IBooks, SearchParams } from "../interfaces";
import { useBooks } from "./useBooks";

export const searchBooks = () => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("new");
  const [params] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(
    Number(params.get("page")) || 1
  );

  const page = currentPage;

  // const query = "";
  const { books, total, handleSubmitSearch } = useBooks(query, page);

  const countOfPages = Math.ceil(total / 200);
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    handleSubmitSearch(value);
    setQuery(value);
  };
};
