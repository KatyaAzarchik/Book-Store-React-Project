import { Link } from "react-router-dom";
import { Logo } from "./Logo/Logo";
import { SearchForm } from "./SearchForm/SearchForm";
import { UserBar } from "./UserBar/UserBar";
import "./header.scss";

export const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-wrapp">
          <Link to={"/"}>
            <Logo logo={"BOOKSTORE"} />
          </Link>
          <SearchForm />
          <UserBar />
        </div>
      </div>
    </div>
  );
};
