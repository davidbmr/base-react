import React from "react";
import style from "./TitleSection.module.css";

interface TitleSectionProps {
	titleText?: string;
}

export const TitleSection = ({ titleText }: TitleSectionProps) => {
	return (
		<div className={style.titleSection__container}>
			<p className={style.titleSection__title}>{titleText}</p>
		</div>
	);
};
