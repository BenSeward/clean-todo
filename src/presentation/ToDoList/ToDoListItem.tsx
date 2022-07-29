import React from "react";
import { ToDoItem } from "../../application/types/todo.type";
import { Checkbox } from "../shared/Checkbox";

export function ToDoListItem({ id, label }: ToDoItem) {
  return (
    <div>
      <label htmlFor={`${id}`}>
        <Checkbox id={`${id}`} type={"checkbox"} />
        <span>{label}</span>
      </label>
    </div>
  );
}
