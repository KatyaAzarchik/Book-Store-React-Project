import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./searchForm.scss";
export const SearchForm = () => {
  return (
    <div className="search-form">
      <input className="search-input" placeholder="Search" type="text" />
      <FontAwesomeIcon className="serch-icon" icon={faSearch} />
    </div>
  );
};
