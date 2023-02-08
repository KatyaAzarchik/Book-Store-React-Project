import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../components/appConstants";

type IBooksResponse = {
  count: number;
};
export const getBooks = createAsyncThunk<
  IBooksResponse[],
  string | Record<string, string> | string[][] | URLSearchParams
>("books/getBooks", async () => {
  try {
    const response = await fetch(`${URL}new`);
    const booksResponse = await response.json();
    const booksArray = Object.values(booksResponse);
    const books = booksArray[2];
    return books;
  } catch (err) {
    // @ts-ignore
    return err.message;
  }
});
