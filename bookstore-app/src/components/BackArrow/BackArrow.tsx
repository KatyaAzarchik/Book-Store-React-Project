import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createBrowserHistory } from "history";
import "./backArrow.scss";

const history = createBrowserHistory();

export const BackArrow = () => {
  const handleGoBack = () => history.back();

  return (
    <button className="arrow-btn" onClick={handleGoBack}>
      <FontAwesomeIcon className="arrow-icon" icon={faArrowLeftLong} />
    </button>
  );
};
