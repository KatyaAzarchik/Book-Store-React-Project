import { IBooks } from "../../../interfaces";
import "./bookCard.scss";

export const BookCard = (book: IBooks) => {
  return (
    <>
      <div className="book-image">
        <img src={book.image} alt="#" />
      </div>
      <div className="text-wrapp">
        <div className="book-tittle">{book.title}</div>
        <div className="book-subtitle">{book.subtitle}</div>
        <div className="price-rate-wrapp">
          <div>{book.price}</div>
        </div>
      </div>
    </>
  );
};
