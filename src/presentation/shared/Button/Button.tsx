import React from "react";
import styles from "./Button.module.scss";

interface Props {
  children: JSX.Element | string;
  onClick: () => void;
}

export function Button({ children, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
