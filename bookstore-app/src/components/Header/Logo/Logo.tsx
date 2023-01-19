import { ILogo } from "../../../interfaces";
import "./logo.scss";
export const Logo = ({ logo }: ILogo) => {
  return <div className="logo">{logo}</div>;
};
