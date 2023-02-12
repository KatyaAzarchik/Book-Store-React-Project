import { FormEvent, useState } from "react";
import { SignInForm } from "./SignInForm";
import "../registrationForm.scss";
import { useLogInUser } from "../../../hooks/useRegisterUser";

export const SignIn = () => {
  const { handleUseLogInUser } = useLogInUser();

  // const dispatch = useAppDispatch();
  const [login, setlogin] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let pass = localStorage.getItem("password")!.replace(/"/g, "");
    let mail = localStorage.getItem("email")!.replace(/"/g, "");

    if (!login || !password) {
      setFlag(true);
    } else if (password !== pass || login !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
      handleUseLogInUser();
    }
    // dispatch(loginUser({ login, password }));
  };

  return home ? (
    <div>
      {flag && (
        <div style={{ color: "red", textAlign: "center" }}>
          Incorrect login or password.
        </div>
      )}
      <SignInForm
        handleSubmitForm={handleSubmit}
        login={login}
        setlogin={(e: any) => setlogin(e.target.value)}
        password={password}
        setPassword={(e: any) => setPassword(e.target.value)}
      />
    </div>
  ) : (
    <div style={{ height: "100vh", textAlign: "center", fontSize: "2rem" }}>
      Welcome!
    </div>
  );
};
