type SignUpForm = {
  handleFormSubmit: (e: any) => void;
  setName: (e: any) => void;
  setEmail: (e: any) => void;
  setPassword: (e: any) => void;
  setConfirmPassword: (e: any) => void;
};

export const SignUpForm = (props: SignUpForm) => {
  return (
    <>
      <div>
        <form
          className="registrate-form"
          name="name"
          onSubmit={props.handleFormSubmit}
        >
          <div className="registrate-input-container">
            <label className="registrate-input-title">Name </label>
            <input
              className="registrate-input"
              type="text"
              placeholder="Your name"
              name="name"
              onChange={props.setName}
            />
          </div>
          <div className="registrate-input-container">
            <label className="registrate-input-title">Email </label>
            <input
              className="registrate-input"
              type="Email"
              placeholder="Your email"
              name="email"
              onChange={props.setEmail}
            />
          </div>
          <div className="registrate-input-container">
            <label className="registrate-input-title">Password </label>
            <input
              className="registrate-input"
              type="password"
              placeholder="Your password"
              name="password"
              onChange={props.setPassword}
            />
          </div>
          <div className="registrate-input-container">
            <label className="registrate-input-title">Confirm password </label>
            <input
              className="registrate-input"
              type="password"
              placeholder="Confirm your password"
              name="password"
              onChange={props.setConfirmPassword}
            />
          </div>
          <button type="submit" className="registrate-btn">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
