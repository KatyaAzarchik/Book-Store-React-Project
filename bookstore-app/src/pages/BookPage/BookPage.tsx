import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBook } from "../../features/bookThunk";
import { bookSelector } from "../../store/selectors";
import { useAppDispatch } from "../../store/store";
import { BookTitle } from "../../components/Books/BookTitle";
import { Book } from "../../components/Books/Book/Book";
import { Tabs } from "../../components/Tabs/Tabs";
import { Tab } from "../../components/Tabs/Tab";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import "./bookPage.scss";

export const Bookpage = () => {
  const book = useSelector(bookSelector);

  const dispatch = useAppDispatch();
  const { isbn13 } = useParams();
  useEffect(() => {
    dispatch(getBook(Number(isbn13)));
  }, []);

  return (
    <div className="book-page" id={`${book?.isbn13}`}>
      <div className="container">
        <BackArrow />
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
        <Tabs tabsClassName="tabs" tabsListClassName="tabs__list">
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
