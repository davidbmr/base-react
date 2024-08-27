import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Toast } from "primereact/toast";
import logo from "@/assets/LogoDefault.svg";
import style from "./MainHeader.module.css";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Tooltip } from "primereact/tooltip";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logoutUser } from "@/store/slices/auth";
import { clearToast } from "@/store/slices/toast";

interface Props {
	textHospital?: string;
	textModule?: string;
}

export const MainHeader = ({ textHospital = "Hospital Chulucanas", textModule }: Props) => {
	const navigate = useNavigate();
	const toast: any = useRef(null);
	const dispatch = useAppDispatch();

	const { toastConfig } = useAppSelector((state) => state.toast);
	// console.log(toastConfig);

	useEffect(() => {
		if (toastConfig.severity) {
			toast.current?.show({
				severity: toastConfig.severity,
				summary: toastConfig.summary,
				detail: toastConfig.detail,
			});

			dispatch(clearToast());
		}
	}, [toastConfig]);

	return (
		<header className={style.mainHeader__container}>
			<Toast ref={toast} />
			<div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
				<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
					<div className={style.logo__container} onClick={() => navigate("/")}>
						<img src={logo} alt="logo" className={style.logo__item} />
					</div>
				</div>
			</div>

			<div className={style.mainHeader__information}>
				<p className={style.mainHeader__title}>
					Sistema de Información Hospitalaria KSalud - 23/08/24
				</p>
				<p className={style.mainHeader__text}>
					{textHospital} - {textModule}
				</p>
				{/* <p className={style.mainHeader__text}></p> */}
			</div>

			<div className={style.section__data}>
				<div>
					<p className={style.title__item}>Hospital Nacional</p>
					<p className={style.subTitle__item}>ADMIN ADMIN</p>
				</div>
				<div className={style.letter__container}>
					<p className={style.letter__item}>A</p>
				</div>
				<div
					className={`${style.letter__container} logout_button`}
					style={{ cursor: "pointer" }}
					data-pr-tooltip="Salir"
					data-pr-position="bottom"
					onClick={() => dispatch(logoutUser())}
				>
					<RiLogoutBoxRLine fill={"var(--primary-color-app)"} size={20} />

					<Tooltip target=".logout_button" />
				</div>
			</div>
		</header>
	);
};
