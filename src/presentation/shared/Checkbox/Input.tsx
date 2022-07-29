import React from "react";

type CheckboxProps = {
  id: string;
  type: string;
};

export function Checkbox({ id, type }: CheckboxProps) {
  return <input id={id} type={type} />;
}
