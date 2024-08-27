import React from "react";
import style from "./SectionContainerBox.module.css";

interface Props {
	children?: React.ReactNode;
	title?: string;
}

export const SectionContainerBox = ({ children, title = "title" }: Props) => {
	return (
		<div className={style.sectionContainerBox__container}>
			<p className={style.title__section}>{title}</p>
			{children}
		</div>
	);
};
