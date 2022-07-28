import React from "react";
import { ToDoItem } from "../../application/types/todo.type";
import { Input } from "../shared/Input";

export function ToDoListItem({ id, label }: ToDoItem) {
  return (
    <div>
      <label htmlFor={`${id}`}>
        <Input id={`${id}`} type={"checkbox"} />
        <span>{label}</span>
      </label>
    </div>
  );
}
