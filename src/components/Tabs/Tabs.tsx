import React, { useState, ReactNode } from 'react';
import style from './Tabs.module.css';

interface TabProps {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
  labelClassName?: string;
  tabButtonClassName?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, labelClassName, tabButtonClassName }) => {
  const [activeTab, setActiveTab] = useState(0);

  const combinedLabelClassName = `${labelClassName}`
  const combinedTabButtonClassName = `${tabButtonClassName} ${style.tab__button}`

  return (
    <div className={style.tabs}>
      <div className={style.tab__list}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${combinedTabButtonClassName} ${activeTab === index ? style.tab__button__active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <p className={combinedLabelClassName}>{tab.label}</p>
          </button>
        ))}
      </div>
      <div className={style.tab__content}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
