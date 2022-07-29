import React from "react";
import styles from "./Container.module.scss";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Container({ children }: Props): React.ReactElement {
  return <div className={styles.container}>{children}</div>;
}
