import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
}

export function Input({ id, value, onChange, disabled, ...rest }: Props) {
  return (
    <input
      id={id}
      className={`${styles.input} ${disabled && styles.completed}`}
      type={"text"}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
  );
}
