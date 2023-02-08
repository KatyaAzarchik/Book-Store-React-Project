import { useState } from "react";
import { SignIn } from "../SignIn/SignIn";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  function handleFormSubmit(e: any) {
    e.preventDefault();

    if (!name || !email || !password || !ConfirmPassword) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
      console.log("Saved in Local Storage");
      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }
  return (
    <>
      <div>
        {login ? (
          <form
            className="registrate-form"
            name="name"
            onSubmit={handleFormSubmit}
          >
            <div className="registrate-input-container">
              <label className="registrate-input-title">Name </label>
              <input
                className="registrate-input"
                type="text"
                placeholder="Your name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="registrate-input-container">
              <label className="registrate-input-title">Email </label>
              <input
                className="registrate-input"
                type="Email"
                placeholder="Your email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="registrate-input-container">
              <label className="registrate-input-title">Password </label>
              <input
                className="registrate-input"
                type="password"
                placeholder="Your password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="registrate-input-container">
              <label className="registrate-input-title">
                Confirm password{" "}
              </label>
              <input
                className="registrate-input"
                type="password"
                placeholder="Confirm your password"
                name="password"
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <button type="submit" className="registrate-btn">
              Sign Up
            </button>
          </form>
        ) : (
          <SignIn />
        )}
      </div>
    </>
  );
};
