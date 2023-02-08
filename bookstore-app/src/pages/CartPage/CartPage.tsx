import { Link } from "react-router-dom";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { CartCount } from "../../components/Cart/CartCount/CartCount";
import { CartTotal } from "../../components/Cart/CartTotal/CartTotal";
import { useRemoveFromCart } from "../../hooks/useRemoveFromCart";
import { IBook } from "../../interfaces";
import { booksCartSelector } from "../../store/selectors";
import { useAppSelector } from "../../store/store";
import "./cartPage.scss";

type ICartList = {
  cartTitle: string;
};

export const CartPage = (props: ICartList) => {
  const CartBooksList = useAppSelector(booksCartSelector);
  const { handleRemoveFromCart } = useRemoveFromCart();

  return (
    <>
      <div className="cart-page">
        <div className="container">
          <BackArrow />
          <h1 className="cart-page-title">{props.cartTitle}</h1>
          {CartBooksList.length === 0 ? (
            <h2>Cart is empty</h2>
          ) : (
            <>
              <ul className="cart-wrapp">
                {CartBooksList.map((book: IBook, index) => {
                  return (
                    <li
                      className="cart-wrapp-item"
                      id={`${book.isbn13}`}
                      key={index}
                    >
                      <div className="cart-wrapp-item-content">
                        <Link to={`/books/${book.isbn13}`}>
                          <div className="cart-wrapp-item-img">
                            <img src={book.image} alt={book.title} />
                          </div>
                        </Link>
                        <div className="cart-item-content">
                          <Link to={`/books/${book.isbn13}`}>
                            <h3 className="cart-item-title">{book.title}</h3>
                            <span className="cart-item-authors">
                              {book.authors}
                            </span>
                          </Link>
                          <CartCount
                            isbn13={book.isbn13}
                            bookCount={Number(book.bookCount)}
                          />
                        </div>
                      </div>
                      <div className="cart-item-price">{book.price}</div>
                      <button
                        onClick={() =>
                          handleRemoveFromCart(Number(book.isbn13))
                        }
                        className="cart-delete-book"
                      >
                        X
                      </button>
                    </li>
                  );
                })}
              </ul>
              <CartTotal />
            </>
          )}
        </div>
      </div>
    </>
  );
};
