import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { BooksListPage } from "./pages/BooksListPage/BooksListPage";
import { Bookpage } from "./pages/BookPage/BookPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { Footer } from "./components/Footer/Footer";
import { CartPage } from "./pages/CartPage/CartPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { AccountPage } from "./pages/AccountPage/AccountPage";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={`/`} element={<BooksListPage />}></Route>

          <Route path={`books/:isbn13`} element={<Bookpage />}></Route>
          <Route
            path={`favorites`}
            element={<FavoritesPage favoritesTitle={"Favorites"} />}
          ></Route>
          <Route
            path={`cart`}
            element={<CartPage cartTitle={"Your Cart"} />}
          ></Route>
          <Route path={`signIn`} element={<SignInPage />}></Route>
          <Route path={`account`} element={<AccountPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
