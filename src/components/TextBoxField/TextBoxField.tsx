import React, { ChangeEvent } from "react";
import style from "./TextBoxField.module.css";
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
	minLength?: number | undefined;
	toUpperCase?: boolean;
	containerWidth?: string;
	placeholder?: string;
}

export const TextBoxField = ({
	textLabel,
	value,
	name,
	type = "text",
	onChange,
	direction = "column",
	disabled = false,
	labelWidth = "100%",
	onBlur,
	labelWrap,
	maxLength,
	minLength = 0,
	toUpperCase = true,
	containerWidth = "100%",
	placeholder = "",
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
				}}
				maxLength={maxLength}
				minLength={minLength}
				placeholder={placeholder}
			/>
		</div>
	);
};
