import { BookTitle } from "../../components/Books/BookTitle";
import Books from "../../components/Books/Books/Books";
export const BooksListPage = () => {
  return (
    <div className="newReleasesBooks">
      <div className="container">
        <BookTitle title={"New Releases Books"} />
        <Books />
      </div>
    </div>
  );
};
