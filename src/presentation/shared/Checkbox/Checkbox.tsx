import React from "react";

type CheckboxProps = {
  id: string;
};

export function Checkbox({ id }: CheckboxProps) {
  return <input id={id} type={"checkbox"} />;
}
