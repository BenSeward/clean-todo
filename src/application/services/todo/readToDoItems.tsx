import { mappedToDoItems } from "../../../infrastructure/api/todo/todo-api.mapper";
import { useToDoListStorage } from "../../store/todo";

export function useToDoList() {
  const storage = useToDoListStorage();

  async function retreiveInitialToDoItems() {
    if (storage) return;

    const formattedItems = await mappedToDoItems();
    return formattedItems;
  }

  return { retreiveInitialToDoItems };
}
