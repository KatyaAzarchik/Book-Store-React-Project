import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../components/appConstants";

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const response = await fetch(`${URL}new`);
  const booksResponse = await response.json();
  const booksArray = Object.values(booksResponse);
  const books = booksArray[2];
  return books;
});
