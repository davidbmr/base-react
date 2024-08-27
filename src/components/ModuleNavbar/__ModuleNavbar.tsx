import React from "react";
import style from "./ModuleNavbar.module.css";
import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";

interface Props {
	menuItems: any;
}

export const ModuleNavbar = ({ menuItems }: Props) => {
	const navigate = useNavigate();

	return (
		<div className={style.moduleNavbar__container}>
			<div className={style.moduleNavbar__list}>
				<Menubar model={menuItems} className={style.menubar__container} />
			</div>
		</div>
	);
};
