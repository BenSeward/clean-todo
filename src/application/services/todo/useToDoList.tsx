import { mappedToDoItems } from "../../../infrastructure/api/todo/todo-api.mapper";
import { useToDoListStorage } from "../../store/todo";

export function useToDoList() {
  const storage = useToDoListStorage();

  async function retreiveInitialToDoItems() {
    if (storage) return;

    const formattedItems = await mappedToDoItems();
    return formattedItems;
  }

  function createToDoItem() {
    const newItem = {
      id: Math.random().toString(),
      label: "another label",
    };

    storage.setToDoItems([...storage.toDoItems, newItem]);
  }

  const getToDoItems = storage?.toDoItems || [];

  return { retreiveInitialToDoItems, getToDoItems, createToDoItem };
}
