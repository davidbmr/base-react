import React from "react";
import style from "./FilterGroupStructure.module.css";
import { IoSearchSharp } from "react-icons/io5";


interface Props {
	children: React.ReactNode;
	onPostFilter: any;
}

export const FilterGroupStructure = ({ children, onPostFilter }: Props) => {
	return (
		<div className={style.filterGroupStructure__container}>
			{children}
			<button className={`${style.button_filter} ${style.button}`} onClick={onPostFilter}>
				<IoSearchSharp fill="#fff" />
			</button>
		</div>
	);
};
