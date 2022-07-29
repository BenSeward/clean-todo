import { ToDoItem } from "../../../application/types/todo.type";
import { fetchToDoItems } from "./todo-api";

export async function mappedToDoItems(): Promise<ToDoItem[]> {
  const toDoItemsFromAPI = await fetchToDoItems();

  return toDoItemsFromAPI.map((item) => {
    return {
      id: item.id.toString(),
      label: item.title,
      completed: item.completed,
    };
  });
}
