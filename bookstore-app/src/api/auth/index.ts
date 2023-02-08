import { AxiosPromise } from "axios";
import EndPoints from "../endPoints";
import { axiosInstance } from "./instance";
import { ILoginRequest, ILoginRrsponse } from "./types";

export const login = (params: ILoginRequest): AxiosPromise<ILoginRrsponse> =>
  axiosInstance.post(EndPoints.AUTH.LOGIN, params);
