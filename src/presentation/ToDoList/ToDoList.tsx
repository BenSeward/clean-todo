import React from "react";
import { useToDoList } from "../../application/services/todo/useToDoList";
import { Button } from "../shared/Button";
import { ToDoListItem } from "./ToDoListItem";

export function ToDoList() {
  const { getToDoItems, createToDoItem } = useToDoList();

  return (
    <div>
      {getToDoItems.map((item, index) => (
        <ToDoListItem key={index} id={item.id} label={item.label} />
      ))}

      <Button onClick={createToDoItem}>ADD ITEM</Button>
    </div>
  );
}
