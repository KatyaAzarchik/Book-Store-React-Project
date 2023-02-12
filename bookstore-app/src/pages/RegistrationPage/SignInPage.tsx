import { RegistrationTabs } from "../../components/Tabs/RegistrationTabs";
import { useAppSelector } from "../../store/store";
import { BooksListPage } from "../BooksListPage/BooksListPage";
import "./signInPage.scss";

export const SignInPage = () => {
  const isUserLogIn = useAppSelector(
    (state) => state.registrationReducer.isLogIn
  );

  return isUserLogIn ? (
    <div>
      <BooksListPage />
    </div>
  ) : (
    <div className="signInPage">
      <div className="container">
        <RegistrationTabs />
      </div>
    </div>
  );
};
