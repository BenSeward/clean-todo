import React from "react";
import { useToDoList } from "../../application/services/todo/useToDoList";
import { useToDoListStorage } from "../../application/store/todo";
import { ToDoListItem } from "./ToDoListItem";

export function ToDoList() {
  const { getToDoItems, createToDoItem } = useToDoList();

  return (
    <div>
      {getToDoItems.map((item, index) => (
        <ToDoListItem key={index} id={item.id} label={item.label} />
      ))}

      <button onClick={createToDoItem}>Create a new item</button>
    </div>
  );
}
