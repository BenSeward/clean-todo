import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
}

export function Input({ id, value, onChange, ...rest }: Props) {
  return (
    <input
      id={id}
      className={styles.input}
      type={"text"}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}
