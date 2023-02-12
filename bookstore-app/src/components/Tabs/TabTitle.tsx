import "./tab.scss";

export type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
};

export const TabTitle = (props: Props): JSX.Element => {
  const { title, setSelectedTab, index, isActive } = props;
  console.log(index);
  const handleOnClick = () => {
    setSelectedTab(index);
  };
  console.log(index);
  return (
    <li onClick={handleOnClick} className={`title ${isActive ? "active" : ""}`}>
      <div className="title__content">{title}</div>
    </li>
  );
};
