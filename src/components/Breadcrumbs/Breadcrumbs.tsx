import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import style from "./Breadcrumbs.module.css";
import { FiArrowLeft } from "react-icons/fi";

export const Breadcrumbs = () => {
	const location = useLocation();
	const navigate = useNavigate();

	let crumbs = [];
	const pathSegments = location.pathname.split("/").filter((crumb) => crumb !== "");

	if (pathSegments.length > 0) {
		crumbs.push(
			<div className={style.crumb} key={pathSegments[0]}>
				<NavLink to={`/${pathSegments[0]}`}>{pathSegments[0]}</NavLink>
			</div>
		);

		if (pathSegments.length > 1) {
			crumbs.push(
				<div className={style.crumb} key={pathSegments[pathSegments.length - 1]}>
					<NavLink to={`/${pathSegments.join("/")}`}>
						{pathSegments[pathSegments.length - 1]}
					</NavLink>
				</div>
			);
		}
	}

	return (
		<div className={style.titleSection__container}>
			<div className={style.titleSection__breadcrumbs__container}>
				<div className={style.titleSection__backButton} onClick={() => navigate(-1)}>
					<FiArrowLeft color={"#fff"} size={16} />
				</div>
				<div className={style.breadcrumbs}>{crumbs}</div>
			</div>
		</div>
	);
};
