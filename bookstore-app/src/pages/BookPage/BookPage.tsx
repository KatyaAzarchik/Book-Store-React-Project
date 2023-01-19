import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { getBook } from "../../store/bookThunk";
import { bookSelector } from "../../store/selectors";
import { useAppDispatch } from "../../store/store";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import { BookTitle } from "../../components/Books/BookTitle";
import "./bookPage.scss";
import { Book } from "../../components/Books/Book/Book";
import { Tabs } from "../../components/Tabs/Tabs";
import { Tab } from "../../components/Tabs/Tab";

const history = createBrowserHistory();

export const Bookpage = () => {
  const book = useSelector(bookSelector);

  const dispatch = useAppDispatch();
  const { isbn13 } = useParams();
  useEffect(() => {
    dispatch(getBook(Number(isbn13)));
  }, []);

  console.log(book);

  const handleGoBack = () => history.back();

  return (
    <div className="book-page" id={`${book?.isbn13}`}>
      <div className="container">
        <button className="arrow-btn" onClick={handleGoBack}>
          <FontAwesomeIcon className="arrow-icon" icon={faArrowLeftLong} />
        </button>
        <BookTitle title={`${book?.title}`} />

        <Book
          authors={`${book?.authors}`}
          desc={`${book?.desc}`}
          language={`${book?.language}`}
          publisher={`${book?.publisher}`}
          rating={`${book?.rating}`}
          year={`${book?.year}`}
          title={`${book?.title}`}
          subtitle={`${book?.subtitle}`}
          price={`${book?.price}`}
          image={`${book?.image}`}
          isbn13={Number(book?.isbn13)}
        />
        <Tabs>
          <Tab title={"Description"}>
            <div>{`${book?.desc}`}</div>
          </Tab>
          <Tab title={"Authors"}>
            <div>{`${book?.authors}`}</div>
          </Tab>
          <Tab title={"Publisher"}>
            <div>{`${book?.publisher}`}</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
