import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../store/store";
import "../userBar.scss";
export const Profile = () => {
  const isUserRegistered = useAppSelector(
    (state) => state.registrationReducer.isRegistered
  );
  const isUserLogIn = useAppSelector(
    (state) => state.registrationReducer.isLogIn
  );
  return isUserRegistered || isUserLogIn ? (
    <Link to={"account"}>
      <FontAwesomeIcon className="user-bar-icon" icon={faUser} />
    </Link>
  ) : (
    <Link to={"signIn"}>
      <FontAwesomeIcon className="user-bar-icon" icon={faUser} />
    </Link>
  );
};
