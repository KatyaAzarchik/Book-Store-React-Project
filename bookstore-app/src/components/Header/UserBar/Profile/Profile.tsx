import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../userBar.scss";
export const Profile = () => {
  return <FontAwesomeIcon className="user-bar-icon" icon={faUser} />;
};
