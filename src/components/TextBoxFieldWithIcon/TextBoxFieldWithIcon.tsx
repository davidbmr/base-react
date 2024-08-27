import React, { ChangeEvent } from "react";
import style from "./TextBoxFieldWithIcon.module.css";
import { InputText } from "primereact/inputtext";

interface TextBoxFieldProps {
	textLabel?: string;
	value: string | undefined;
	name: string;
	type?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	direction?: "row" | "column";
	disabled?: boolean;
	labelWidth?: string;
	onBlur?: any;
	containerStyle?: React.CSSProperties;
	labelWrap?: string;
	maxLength?: number | undefined;
	icon?: React.ReactNode; // Nuevo prop para el ícono
	onClickIcon?: any;
	toUpperCase?: boolean;
	containerWidth?: string;
}

export const TextBoxFieldWithIcon = ({
	textLabel,
	value,
	name,
	type = "text",
	onChange,
	direction = "column",
	disabled = false,
	labelWidth = "100%",
	onBlur,
	containerStyle,
	labelWrap,
	maxLength,
	icon, // Nuevo prop para el ícono
	onClickIcon,
	toUpperCase = true,
	containerWidth = "100%",
}: TextBoxFieldProps) => {
	const styles: React.CSSProperties = {
		width: labelWidth,
		fontSize: "12px",
		whiteSpace: labelWrap,
	};
	const stylesContainer: React.CSSProperties = {
		width: containerWidth,
	};
	return (
		<div
			className={`${style.item__group} ${
				direction === "column" ? style.item__column : style.item__row
			}`}
			style={stylesContainer}
		>
			{textLabel ? <label style={styles}>{textLabel}</label> : <></>}

			<div style={{ display: "flex", alignItems: "center" }}>
				<InputText
					className="p-inputtext-sm"
					value={value}
					name={name}
					type={type}
					onChange={onChange}
					autoComplete="off"
					disabled={disabled}
					onBlur={onBlur}
					style={{
						width: "100%",
						height: "30px",
						textTransform: `${toUpperCase ? "uppercase" : "none"}`,
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
					}}
					maxLength={maxLength}
				/>
				{icon && (
					<div className={style.icon__container} onClick={onClickIcon}>
						{icon}
					</div>
				)}
				{/* Renderiza el ícono si está presente */}
			</div>
		</div>
	);
};
