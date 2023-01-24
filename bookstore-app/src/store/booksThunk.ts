import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../components/appConstants";
import { IBooks } from "../interfaces";
export interface IBooksResponse {
  // results: IBooks[];
  count: number;
}
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

// export const fetchPostsThunk = createAsyncThunk<
//   IPostsResponse,
//   string | Record<string, string> | string[][] | URLSearchParams
// >("posts/fetchPosts", async (postUrlParams, thunkApi) => {
//   try {
//     const url = buildUrl(postApiUrl, postUrlParams);
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });
//     return await response.json();
//   } catch (err) {
//     return thunkApi.rejectWithValue({
//       message: err.message,
//     });
//   }
// });

// export const createPostThunk = createAsyncThunk<IPost, INewPost>(
//   "posts/createPost",
//   async (newPost, thunkApi) => {
//     try {
//       const accessToken = localStorage.getItem("access");

//       const formData = objectToFormData(newPost);

//       const result = await fetch(postApiUrl, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: formData,
//       });
//       return await result.json();
//     } catch (err) {
//       return thunkApi.rejectWithValue({
//         message: err.message,
//       });
//     }
//   }
// );
