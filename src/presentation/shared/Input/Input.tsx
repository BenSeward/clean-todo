import React from "react";
import styles from "./Input.module.scss";

type InputProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
};

export function Input({ id, value, onChange }: InputProps) {
  return (
    <input
      id={id}
      className={styles.input}
      type={"text"}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
