import { ReactElement, useState } from "react";
import { TabTitle, Props as TabTitleProps } from "./TabTitle";
import "./tab.scss";

interface ITabProps {
  children: ReactElement<TabTitleProps>[];
  preSelectedTabIndex?: number;
  tabsClassName: string;
  tabsListClassName: string;
}

export const Tabs = (props: ITabProps) => {
  const [preSelectedTabIndex, setPreselectedTabIndex] = useState(
    props.preSelectedTabIndex || 0
  );

  const handleSelectedTabIndex = (index: number) =>
    setPreselectedTabIndex(index);

  return (
    <div className={props.tabsClassName}>
      <ul className={props.tabsListClassName}>
        {props.children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === preSelectedTabIndex}
            setSelectedTab={handleSelectedTabIndex}
          />
        ))}
      </ul>
      {props.children[preSelectedTabIndex]}
    </div>
  );
};
