import React from "react";
import style from "./ContentBoxShort.module.css";

interface ContentBoxShortProps {
	title: any;
	children: React.ReactNode;
	additionalClassName?: string;
}

export const ContentBoxShort = ({ title, children = true, additionalClassName = "" }: ContentBoxShortProps) => {
	const combinedClassNames = `${style.contentBox__container} ${additionalClassName}`;

	return (
		<>
				<div className={combinedClassNames}>
					<div className={style.box__title}>
						<p className={style.title__item}>{title}</p>
					</div>
					<div className={style.box__content}>{children}</div>
				</div>

		</>
	);
};
