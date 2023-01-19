import React, { ReactElement } from "react";
import { ITab } from "../../interfaces";
export const Tab = ({ children }: ITab): JSX.Element => (
  <div className="tab-content">{children}</div>
);
