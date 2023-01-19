import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { NewReleasesBooks } from "./pages/NewReleasesBooks/NewReleasesBooks";
import { Bookpage } from "./pages/BookPage/BookPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={`/`} element={<NewReleasesBooks />}></Route>

          <Route path={`books/:isbn13`} element={<Bookpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
