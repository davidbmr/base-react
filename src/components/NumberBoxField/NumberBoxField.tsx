import React from "react";
import style from "./NumberBoxField.module.css";

import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";

interface NumberBoxFieldProps {
  textLabel?: string;
  value: number | undefined;
  name: string;
  onChange: (e: InputNumberValueChangeEvent) => void;
  direction?: "row" | "column";
  disabled?: boolean;
  labelWidth?: string;
  onBlur?: any;
  containerStyle?: React.CSSProperties;
  labelWrap?: string;
  maxLength?: number | undefined;
  toUpperCase?: boolean;
  containerWidth?: string;
}

export const NumberBoxField = ({
  textLabel,
  value,
  name,
  onChange,
  direction = "column",
  disabled = false,
  labelWidth = "100%",
  onBlur,
  labelWrap,
  maxLength,
  toUpperCase = true,
  containerWidth = "100%",
}: NumberBoxFieldProps) => {
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
      <InputNumber
        value={value}
        name={name}
        onValueChange={onChange}
        minFractionDigits={2}
        maxFractionDigits={2}
        disabled={disabled}
        onBlur={onBlur}
        style={{
          width: "100%",
          height: "30px",
          textTransform: `${toUpperCase ? "uppercase" : "none"}`,
        }}
        maxLength={maxLength}
      />
    </div>
  );
};
