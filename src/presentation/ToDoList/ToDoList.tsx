import React from "react";
import { useApplicationContext } from "../../application/store";
import ToDoListItem from "./ToDoListItem";

export function ToDoList() {
  const { toDoItems } = useApplicationContext();

  return (
    <div>
      {toDoItems.map((item, index) => (
        <ToDoListItem key={index} id={item.id} label={item.label} />
      ))}
    </div>
  );
}
