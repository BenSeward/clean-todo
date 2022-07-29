import React, { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export function Checkbox({ id, ...rest }: CheckboxProps): JSX.Element {
  return (
    <input className={styles.checkbox} id={id} type={"checkbox"} {...rest} />
  );
}
