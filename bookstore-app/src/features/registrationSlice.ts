import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialRegistrationState {
  isRegistered: boolean;
  isLogIn: boolean;
}

const initialState: IInitialRegistrationState = {
  isRegistered: false,
  isLogIn: false,
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState: initialState,
  reducers: {
    logInUser(state: IInitialRegistrationState) {
      state.isLogIn = true;
    },
    registerUser(state: IInitialRegistrationState) {
      state.isRegistered = true;
    },
    logOutUser(state: IInitialRegistrationState) {
      state.isLogIn = false;
    },
  },
});
export const { registerUser, logInUser, logOutUser } =
  registrationSlice.actions;

export default registrationSlice.reducer;
