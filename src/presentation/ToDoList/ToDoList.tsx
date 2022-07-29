import React from "react";
import { useToDoListStorage } from "../../application/store/todo";
import { ToDoListItem } from "./ToDoListItem";

export function ToDoList() {
  const context = useToDoListStorage();

  if (!context || !context.toDoItems) return null;

  return (
    <div>
      {context.toDoItems.map((item, index) => (
        <ToDoListItem key={index} id={item.id} label={item.label} />
      ))}
    </div>
  );
}
