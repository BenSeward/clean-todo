import React from "react";
import { useToDoList } from "../../application/services/todo/useToDoList";
import { ToDoListItem } from "./ToDoListItem";

export function ToDoList() {
  const { getToDoItems } = useToDoList();

  return (
    <div>
      {getToDoItems.map((item, index) => (
        <ToDoListItem key={index} id={item.id} label={item.label} />
      ))}
    </div>
  );
}
