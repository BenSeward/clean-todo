import React from "react";
import { useToDoList } from "../../application/services/todo/useToDoList";
import { Button } from "../shared/Button";
import { ToDoListItem } from "./ToDoListItem";

export function ToDoList() {
  const { getToDoItems, createToDoItem } = useToDoList();

  // @TOSO add the completed prop. Not sure why its red right now?

  return (
    <div>
      {getToDoItems.map((item, index) => (
        <ToDoListItem
          key={index}
          id={item.id}
          label={item.label}
          completed={item.completed}
        />
      ))}

      <Button onClick={createToDoItem}>ADD ITEM</Button>
    </div>
  );
}
