import "./logo.scss";

type ILogo = {
  logo: string;
};
export const Logo = (props: ILogo) => {
  return <div className="logo">{props.logo}</div>;
};
