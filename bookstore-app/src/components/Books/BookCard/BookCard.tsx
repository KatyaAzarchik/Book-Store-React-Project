import { IBooks } from "../../../interfaces";
import "./bookCard.scss";

export const BookCard = (props: IBooks) => {
  return (
    <>
      <div className="book-image">
        <img src={props.image} alt="#" />
      </div>
      <div className="text-wrapp">
        <div className="book-tittle">{props.title}</div>
        <div className="book-subtitle">{props.subtitle}</div>
        <div className="price-rate-wrapp">
          <div>{props.price}</div>
        </div>
      </div>
    </>
  );
};
