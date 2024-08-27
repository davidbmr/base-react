import React from "react";
import style from "./ContentBox.module.css";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";

interface ContentBoxProps {
	title: any;
	children: React.ReactNode;
	showBreadcrumbs?: boolean;
	additionalClassName?: string;
}

export const ContentBox = ({ title, children,showBreadcrumbs = true, additionalClassName = "" }: ContentBoxProps) => {
	const combinedClassNames = `${style.contentBox__container} ${additionalClassName}`;

	return (
		<>
			<div>
				{showBreadcrumbs && <Breadcrumbs />}				
				<div className={combinedClassNames}>
					<div className={style.box__title}>
						<p className={style.title__item}>{title}</p>
					</div>
					<div className={style.box__content}>{children}</div>
				</div>
			</div>
		</>
	);
};
