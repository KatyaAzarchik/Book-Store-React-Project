import { Link } from "react-router-dom";

export const SuccessMessagePage = () => {
  return (
    <div
      className="successMessagePage"
      style={{
        height: "100vh",
      }}
    >
      <div className="container">
        <div
          className="successMessage"
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "1.5rem",
          }}
        >
          You have successfully registered
        </div>
        <Link to={"success"}>
          <button
            style={{
              display: "block",
              width: "255px",
              margin: "auto",
              padding: "13px 0 13px 0",
              fontSize: "1.5rem",
              textAlign: "center",
              fontFamily: "Bebas Neue",
              cursor: "pointer",
              border: "none",
              backgroundColor: " rgba(49, 48, 55, 1)",
              color: "#fff",
            }}
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
