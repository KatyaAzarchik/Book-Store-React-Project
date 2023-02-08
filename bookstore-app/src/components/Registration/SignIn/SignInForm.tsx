// import { login } from "../../../api/auth";
import "../registrationForm.scss";

type SignInForm = {
  handleSubmitForm: (e: any) => void;
  login: string;
  setlogin: (e: any) => void;
  password: string;
  setPassword: (e: any) => void;
};
export const SignInForm = (props: SignInForm) => {
  return (
    <div>
      <form
        onSubmit={props.handleSubmitForm}
        className="registrate-form"
        name="name"
      >
        <div className="registrate-input-container">
          <label className="registrate-input-title">Email </label>
          <input
            className="registrate-input"
            type="email"
            placeholder="Your email"
            name="email"
            value={props.login}
            onChange={props.setlogin}
          />
        </div>
        <div className="registrate-input-container">
          <label className="registrate-input-title">Password </label>
          <input
            className="registrate-input"
            type="text"
            placeholder="Your password"
            name="password"
            value={props.password}
            onChange={props.setPassword}
          />
        </div>
        <button className="registrate-btn">Sign In</button>
      </form>
    </div>
  );
};
