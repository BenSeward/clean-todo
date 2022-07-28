import React from "react";
import { ToDoItem } from "../../application/types/todo.type";

export default function ToDoListItem({ id, label }: ToDoItem) {
  return (
    <div>
      <label htmlFor={`${id}`}>
        <input id={`${id}`} type={"checkbox"} />
        <span>{label}</span>
      </label>
    </div>
  );
}
