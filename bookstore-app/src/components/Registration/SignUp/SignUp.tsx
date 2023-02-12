import { useState } from "react";
import { useRegisterUser } from "../../../hooks/useRegisterUser";
import { SignUpForm } from "../SignIn/SignUpForm";

export const SignUp = () => {
  const { handleuseRegisterUser } = useRegisterUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [flag, setFlag] = useState(false);
  function handleFormSubmit(e: any) {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !ConfirmPassword ||
      password !== ConfirmPassword
    ) {
      setFlag(true);
    } else {
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
      console.log("Saved in Local Storage");
      handleuseRegisterUser();
    }
  }

  return (
    <>
      {flag && (
        <div style={{ color: "red", textAlign: "center" }}>
          Please fill in all fields.
        </div>
      )}
      <SignUpForm
        handleFormSubmit={handleFormSubmit}
        setName={(event) => setName(event.target.value)}
        setEmail={(event) => setEmail(event.target.value)}
        setPassword={(event) => setPassword(event.target.value)}
        setConfirmPassword={(event) => setConfirmPassword(event.target.value)}
      />
    </>
  );
};
