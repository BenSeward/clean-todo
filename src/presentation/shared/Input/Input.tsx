import React from "react";

type InputProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
};

export function Input({ id, value, onChange }: InputProps) {
  return (
    <input
      id={id}
      type={"text"}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
