import { useCallback } from "react";
import {
  logInUser,
  logOutUser,
  registerUser,
} from "../features/registrationSlice";
import { useAppDispatch } from "../store/store";

export const useRegisterUser = () => {
  const dispatch = useAppDispatch();

  const handleuseRegisterUser = useCallback(() => {
    return dispatch(registerUser());
  }, [dispatch]);
  return { handleuseRegisterUser };
};
export const useLogInUser = () => {
  const dispatch = useAppDispatch();

  const handleUseLogInUser = useCallback(() => {
    return dispatch(logInUser());
  }, [dispatch]);
  return { handleUseLogInUser };
};

export const useLogOutUser = () => {
  const dispatch = useAppDispatch();

  const handleuseLogOutUser = useCallback(() => {
    return dispatch(logOutUser());
  }, [dispatch]);
  return { handleuseLogOutUser };
};
