import { useState } from "react";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { RegistrationTabs } from "../../components/Tabs/RegistrationTabs";
import { useLogOutUser } from "../../hooks/useRegisterUser";
import { useAppSelector } from "../../store/store";
import "./accounPage.scss";
export const AccountPage = () => {
  const isUserLogIn = useAppSelector(
    (state) => state.registrationReducer.isLogIn
  );
  const { handleuseLogOutUser } = useLogOutUser();
  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [success, setSuccess] = useState(false);
  const haldleCahgePassword = (e: any) => {
    e.preventDefault();
    if (
      !newPassword ||
      !confirmNewPassword ||
      newPassword !== confirmNewPassword
    ) {
      setFlag(true);
    } else {
      localStorage.setItem("password", JSON.stringify(newPassword));
      setSuccess(true);
    }
  };
  const handleLogOut = () => {
    handleuseLogOutUser();
  };
  const name = localStorage.getItem("name")?.replace(/"/g, "");
  const email = localStorage.getItem("email")?.replace(/"/g, "");
  const password = localStorage.getItem("password")?.replace(/"/g, "");

  return isUserLogIn ? (
    <div className="accountPage">
      <div className="container">
        <BackArrow />
        <h1 className="accountPage-title">Account</h1>
        <h3 className="profile-title">profile</h3>
        <div className="profile-container">
          <div className="profile-input-container">
            <label className="profile-input-lable">Name</label>
            <input
              className="profile-input"
              type="text"
              value={name}
              readOnly={true}
            />
          </div>
          <div className="profile-input-container">
            <label className="profile-input-lable">Email</label>
            <input
              className="profile-input"
              type="email"
              value={email}
              readOnly={true}
            />
          </div>
        </div>
        {flag && <div style={{ color: "red" }}>Please fill in all fields.</div>}
        <h3 className="profile-title">Password</h3>
        <div className="profile-container">
          <div className="profile-input-container">
            <label className="profile-input-lable">Password</label>
            <input
              className="profile-input"
              type="password"
              value={password}
              readOnly={true}
            />
          </div>
          <></>
          <div className="profile-input-container">
            <label className="profile-input-lable">New password</label>
            <input
              className="profile-input"
              placeholder="New password"
              type="password"
              onChange={(e: any) => setnewPassword(e.target.value)}
            />
          </div>
          <div className="profile-input-container">
            <label className="profile-input-lable">Confirm new password</label>
            <input
              className="profile-input"
              placeholder="Confirm new password"
              type="password"
              onChange={(e: any) => setconfirmNewPassword(e.target.value)}
            />
          </div>
        </div>
        {success && (
          <div style={{ color: "blue", marginBottom: "15px" }}>
            password successfully changed.
          </div>
        )}
        <div className="profile-buttons">
          <button onClick={haldleCahgePassword} className="save-btn">
            Save changes
          </button>
          <button onClick={handleLogOut} className="cancel-btn">
            Log out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="signInPage">
      <RegistrationTabs />
    </div>
  );
};
