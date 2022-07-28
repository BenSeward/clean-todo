import React from "react";

type InputProps = {
  id: string;
  type: string;
};

export function Input({ id, type }: InputProps) {
  return <input id={id} type={type} />;
}
