import "./tab.scss";

export type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
};

export const TabTitle = (props: Props): JSX.Element => {
  const { title, setSelectedTab, index, isActive } = props;

  const handleOnClick = () => {
    setSelectedTab(index);
  };

  return (
    <li className={`title ${isActive ? "active" : ""}`}>
      <div className="title__content" onClick={handleOnClick}>
        {title}
      </div>
    </li>
  );
};
