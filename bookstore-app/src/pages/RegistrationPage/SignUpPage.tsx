import { RegistrationTabs } from "../../components/Tabs/RegistrationTabs";
import { useAppSelector } from "../../store/store";
import { SuccessMessagePage } from "../SuccessMessagePage/SuccessMessagePage";
import "./signInPage.scss";

export const SignUpPage = () => {
  const isUserRegistered = useAppSelector(
    (state) => state.registrationReducer.isRegistered
  );
  const isUserLogIn = useAppSelector(
    (state) => state.registrationReducer.isLogIn
  );
  console.log(isUserRegistered);
  return isUserRegistered && !isUserLogIn ? (
    <>
      <SuccessMessagePage />
    </>
  ) : (
    <div className="signInPage">
      <RegistrationTabs />
    </div>
  );
};
