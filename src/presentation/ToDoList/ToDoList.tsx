import React from "react";
import { useApplicationContext } from "../../application/store";
import ToDoListItem from "./ToDoListItem";

export function ToDoList() {
  const { toDoItems } = useApplicationContext();

  return toDoItems.map((item, index) => (
    <ToDoListItem key={index} id={item.id} label={item.label} />
  ));
}
