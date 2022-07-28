import { useEffect, useState } from "react";
import { readToDoItems } from "../services/todo/readToDoItems";

export const defaultToDoContext = {
  toDoItems: [
    {
      id: "0",
      label: "This is a to do item",
    },
  ],
  setToDoItems: () => {},
};

export function useToDo() {
  const [toDoItems, setToDoItems] = useState(defaultToDoContext.toDoItems);

  useEffect(() => {
    (async () => {
      const toDoItems = await readToDoItems();
      console.log(toDoItems);
      setToDoItems(toDoItems);
    })();
  }, []);

  return [toDoItems, setToDoItems];
}
