import { SignIn } from "../../components/Registration/SignIn/SignIn";
import { SignUp } from "../../components/Registration/SignUp/SignUp";
import { Tab } from "../../components/Tabs/Tab";
import { Tabs } from "../../components/Tabs/Tabs";
import "./signInPage.scss";

export const SignInPage = () => {
  return (
    <div className="signInPage">
      <div className="container">
        <Tabs
          tabsClassName="registration-tabs"
          tabsListClassName="registration-tabs-list"
        >
          <Tab title={"sign in"}>
            <div>{<SignIn />}</div>
          </Tab>
          <Tab title={"sign UP"}>
            <div>{<SignUp />}</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
