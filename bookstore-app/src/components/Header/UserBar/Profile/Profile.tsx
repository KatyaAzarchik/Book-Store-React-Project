import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../userBar.scss";
export const Profile = () => {
  return (
    <Link to={"signIn"}>
      <FontAwesomeIcon className="user-bar-icon" icon={faUser} />
    </Link>
  );
};
