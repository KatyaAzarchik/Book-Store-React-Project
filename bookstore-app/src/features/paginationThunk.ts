import { createAsyncThunk } from "@reduxjs/toolkit";
import { booksApiUrl } from "../components/appConstants";
import { buildUrl } from "../components/helpers/buildUrl";
import { IBooks } from "../interfaces";

export interface IBooksResponse {
  books: IBooks[];
  total: number;
}
export const getBooks = createAsyncThunk<
  IBooksResponse[],
  string | Record<string, string> | string[][] | URLSearchParams
>("books/getBooks", async (bookstUrlParams, thunkApi) => {
  try {
    const url = buildUrl(booksApiUrl, bookstUrlParams);
    const response = await fetch(url, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    return thunkApi.rejectWithValue({
      message: err,
    });
  }
});
