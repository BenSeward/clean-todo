import React from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  id: string;
};

export function Checkbox({ id }: CheckboxProps) {
  return <input className={styles.checkbox} id={id} type={"checkbox"} />;
}
