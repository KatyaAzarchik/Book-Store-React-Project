import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getBooks } from "../store/booksThunk";
import { booksCountSelector, booksSelector } from "../store/selectors";
import { useAppDispatch, useAppSelector } from "../store/store";

export const useBooks = (limit: number, offset: number) => {
  const { books, count } = useAppSelector((state) => state.booksReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBooks(`limit=${limit}&offset=${offset}`));
  }, [dispatch]);
  console.log(books);
  return {
    books,
    count,
  };
};

// export const useBooks = () => {
//   const books = useAppSelector(booksSelector);
//   const limitPerPage = 10;
//   const dispatch = useAppDispatch();
//   useEffect(() => {
//     dispatch(getBooks());
//   }, [dispatch]);

//   return {
//     books,
//   };
// };
