import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../components/appConstants";

export const getBook = createAsyncThunk(
  "book/getBook",
  async (isbn13: number) => {
    const response = await fetch(`${URL}/books/${isbn13}`);
    return await response.json();
  }
);
