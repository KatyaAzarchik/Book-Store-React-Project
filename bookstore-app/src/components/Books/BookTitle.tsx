import { IBooksTitle } from "../../interfaces";
import "./books.scss";
export const BookTitle = (pros: IBooksTitle) => {
  return <h2 className="newReleasesBooks-title">{pros.title}</h2>;
};
