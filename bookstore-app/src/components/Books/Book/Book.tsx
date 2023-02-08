import { useState } from "react";
import { useAppSelector } from "../../../store/store";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { IBook } from "../../../interfaces";
import { FavoriteBookIcon } from "../../FavoriteBookIcon/FavoriteBookIcon";
import { PopUpBook } from "../../PopUp/PopUpBook";
import { useRemoveFromCart } from "../../../hooks/useRemoveFromCart";
import { Rating } from "../../Rating/Rating";
import "./book.scss";

export const Book = (props: IBook) => {
  const [modalActive, setModalActive] = useState(false);
  const handleOpenPopUp = () => {
    setModalActive(!modalActive);
  };

  const isBookInCart = useAppSelector((state) =>
    state.cartReducer.cart.find((item) => item.isbn13 === props.isbn13)
  );
  const { handleAddToCart } = useAddToCart();
  const { handleRemoveFromCart } = useRemoveFromCart();

  return (
    <>
      <PopUpBook
        modalImg={props.image}
        active={modalActive}
        setModalActive={setModalActive}
      />

      <div className="book-page-wrapp" id={`${props.isbn13}`}>
        <div className="book-page-img">
          <img src={props?.image} alt={props?.title} />
          <FavoriteBookIcon
            isbn13={Number(props.isbn13)}
            title={props.title}
            subtitle={props.subtitle}
            price={props.price}
            image={props.image}
            rating={props.rating}
          />
        </div>
        <div className="book-page-info">
          <div className="book-price-wrapp">
            <div className="book-price">{props.price}</div>
            <Rating
              rate={
                Number.isNaN(Number(props.rating)) ? 0 : Number(props.rating)
              }
            />
          </div>
          <div className="book-wrapp">
            <span className="book-page-info-title">Authors</span>
            <span className="book-page-info-name">{props.authors}</span>
          </div>
          <div className="book-wrapp">
            <span className="book-page-info-title">Publisher</span>
            <span className="book-page-info-name">{props?.publisher}</span>
          </div>
          <div className="book-wrapp">
            <span className="book-page-info-title">Language</span>
            <span className="book-page-info-name">{props?.language}</span>
          </div>
          <div className="book-wrapp">
            <span className="book-page-info-title">Year</span>
            <span className="book-page-info-name">{props?.year}</span>
          </div>
          <div className="book-page-btn-wrapp">
            <button
              onClick={() =>
                isBookInCart
                  ? handleRemoveFromCart(Number(props.isbn13))
                  : handleAddToCart(props)
              }
              className={
                !isBookInCart ? "book-page-btn" : "book-page-btn-added"
              }
            >
              {isBookInCart ? "REMOVE FROM CART" : "ADD TO CART"}
            </button>
          </div>

          <div onClick={handleOpenPopUp} className="book-previewe">
            Previewe book
          </div>
        </div>
      </div>
    </>
  );
};
