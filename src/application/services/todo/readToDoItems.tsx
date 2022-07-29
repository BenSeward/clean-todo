import { formattedToDoItems } from "../../../infrastructure/api/todo/todo-api";
import { useToDoListStorage } from "../../store/todo";

export function useToDoList() {
  const storage = useToDoListStorage();

  async function retreiveInitialToDoItems() {
    if (storage) return;

    const formattedItems = await formattedToDoItems();
    return formattedItems;
  }

  return { retreiveInitialToDoItems };
}
