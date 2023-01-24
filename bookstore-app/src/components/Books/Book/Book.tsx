import { IBook } from "../../../interfaces";
import { FavoriteBookIcon } from "../../Header/UserBar/Favorites/FavoriteBookIcon";
import { PopUpBook } from "../../PopUp/PopUpBook";
import "../../../pages/BookPage/bookPage.scss";
import { useState } from "react";
export const Book = (book: IBook) => {
  const [modalActive, setModalActive] = useState(false);

  const handleOpenPopUp = () => {
    setModalActive(!modalActive);
  };

  return (
    <>
      <PopUpBook
        modalImg={book.image}
        active={modalActive}
        setModalActive={setModalActive}
      />

      <div className="book-page-wrapp">
        <div className="book-page-img">
          <img src={book?.image} alt={book?.title} />
          <FavoriteBookIcon
            isbn13={Number(book.isbn13)}
            title={book.title}
            subtitle={book.subtitle}
            price={book.price}
            image={book.image}
          />
        </div>
        <div className="book-page-info">
          <div className="book-price">{book.price}</div>
          <div className="book-wrapp">
            <span className="book-page-info-title">Authors</span>
            <span className="book-page-info-name">{book.authors}</span>
          </div>
          <div className="book-wrapp">
            <span className="book-page-info-title">Publisher</span>
            <span className="book-page-info-name">{book?.publisher}</span>
          </div>
          <div className="book-wrapp">
            <span className="book-page-info-title">Language</span>
            <span className="book-page-info-name">{book?.language}</span>
          </div>
          <div className="book-wrapp">
            <span className="book-page-info-title">Year</span>
            <span className="book-page-info-name">{book?.year}</span>
          </div>
          <div className="book-page-btn-wrapp">
            <button className="book-page-btn">ADD TO CART</button>
          </div>

          <div onClick={handleOpenPopUp} className="book-previewe">
            Previewe book
          </div>
        </div>
      </div>
    </>
  );
};
