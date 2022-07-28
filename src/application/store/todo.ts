import { useState } from "react";

export const defaultToDoContext = {
  toDoItems: [
    {
      id: 0,
      label: "This is a to do item",
    },
  ],
  setToDoItems: () => {},
};

export function useToDo() {
  const [toDoItems, setToDoItems] = useState(defaultToDoContext.toDoItems);
  return [toDoItems, setToDoItems];
}
