import { Books } from "../../components/Books/Books";
import { BookTitle } from "../../components/Books/BookTitle";
export const NewReleasesBooks = () => {
  return (
    <div className="newReleasesBooks">
      <div className="container">
        <BookTitle title={"New Releases Books"} />
        <Books />
      </div>
    </div>
  );
};
