import { ReactElement } from "react";

export interface ITab {
  title: string;
  children: ReactElement | ReactElement[];
}
export const Tab = ({ children }: ITab): JSX.Element => (
  <div className={"tab-content"}>{children}</div>
);
