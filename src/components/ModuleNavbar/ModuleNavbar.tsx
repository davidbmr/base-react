import React from "react";
import style from "./ModuleNavbar.module.css";
import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";

interface Props {
	menuItems: any;
}

export const ModuleNavbar = ({ menuItems }: Props) => {
	const navigate = useNavigate();

	const processMenuItems = (items: any, parentKey: string = "") => {
		return items.map((item: any, index: number) => {
			const key = `${parentKey}${index}`;

			if (item.items) {
				return {
					...item,
					items: processMenuItems(item.items, key),
					key: `menu-${key}`,
				};
			}

			if (item.url) {
				const { url, ...rest } = item;
				return {
					...rest,
					key: `menu-item-${key}`,
					command: () => navigate(item.url),
				};
			}

			return { ...item, key: `menu-item-${key}` };
		});
	};

	const updatedMenuItems = processMenuItems(menuItems);

	return (
		<div className={style.moduleNavbar__container}>
			<div className={style.moduleNavbar__list}>
				<Menubar model={updatedMenuItems} className={style.menubar__container} />
			</div>
		</div>
	);
};
