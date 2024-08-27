import React, { useState } from "react";
import style from "./ContentBoxTab.module.css";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";

interface ContentBoxProps {
	showBreadcrumbs?: boolean;
	additionalClassName?: string;

	currentTab?: number;
	tabList?: any;
}

export const ContentBoxTab = ({
	showBreadcrumbs = true,
	additionalClassName = "",

	tabList,
}: ContentBoxProps) => {
	const combinedClassNames = `${style.contentBox__container} ${additionalClassName}`;
	const [currentTab, setCurrentTab] = useState(1);

	const handleChangeTab = (tabNumber: number) => {
		setCurrentTab(tabNumber);
	};

	return (
		<>
			<div>
				{showBreadcrumbs && <Breadcrumbs />}

				<div className={style.sectionTab__container}>
					{tabList &&
						tabList.map((item: any) => (
							<div
								key={item.id}
								className={`${style.sectionTab__item} ${
									currentTab == item.id && style.sectionTab__item__active
								}`}
								onClick={() => handleChangeTab(item.id)}
							>
								{item.tabName}
							</div>
						))}
				</div>
				<div className={combinedClassNames}>
					<div className={style.box__title}>
						<p className={style.title__item}>{tabList[currentTab - 1].title}</p>
					</div>
					<div className={style.box__content}>{tabList[currentTab - 1].component}</div>
				</div>
			</div>
		</>
	);
};
