import { useState } from "react";

export const defaultToDoContext = {
  toDoItems: [
    {
      id: 0,
      label: "This is a to do itemsss",
    },
  ],
  setToDoItems: () => {},
};

export function useToDo() {
  const [toDoItems, setToDoItems] = useState(defaultToDoContext.toDoItems);
  return [toDoItems, setToDoItems];
}
