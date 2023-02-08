import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useBooks } from "../../../hooks/useBooks";
import "./searchForm.scss";

export const SearchForm = () => {
  const { handleSubmitSearch } = useBooks(15, 150);
  return (
    <form className="search-form">
      <input
        onChange={handleSubmitSearch}
        className="search-input"
        placeholder="Search"
        type="text"
      />
      <FontAwesomeIcon className="serch-icon" icon={faSearch} />
    </form>
  );
};
