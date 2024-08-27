import React from "react";
import style from "./HeaderDataTable.module.css";

import { MdCreate } from "react-icons/md";
import { RiFileExcel2Line } from "react-icons/ri";

interface HeaderDataTableProps {
	onCreate?: any;
	onExport?: any;
	customButton?: any;
	onCustomButton?: any;
	customButtonDisabled?: any;
}

export const HeaderDataTable = ({
	onCreate,
	onExport,
	customButton,
	onCustomButton,
	customButtonDisabled,
}: HeaderDataTableProps) => {
	return (
		<div className={style.header__container}>
			<div className={style.buttonsLeft__container}>
				{onCreate ? (
					<button
						className={`${style.button__create} ${style.button}`}
						type="button"
						onClick={onCreate}
					>
						<MdCreate fill="#fff" />
						Nuevo
					</button>
				) : null}

				{onExport ? (
					<button className={`${style.button__export} ${style.button}`} onClick={onExport}>
						<RiFileExcel2Line fill="#fff" />
						Exportar
					</button>
				) : null}

				{customButton ? (
					<button
						className={`${style.button__create} ${style.button} ${
							customButtonDisabled ? style.button__disabled : ""
						}`}
						onClick={onCustomButton}
						disabled={customButtonDisabled}
					>
						<MdCreate fill="#fff" />
						{customButton}
					</button>
				) : null}
			</div>
		</div>
	);
};
