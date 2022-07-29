import { ToDoItem } from "../../../application/types/todo.type";
import { ToDoAPIInterface } from "./todo-api.dto";

async function fetchToDoItems(): Promise<ToDoAPIInterface> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const allItems = await res.json();
  const reducedNumberOfItems = allItems.slice(0, 10);

  return reducedNumberOfItems;
}

export async function formattedToDoItems(): Promise<ToDoItem[]> {
  const toDoItemsFromAPI = await fetchToDoItems();

  return toDoItemsFromAPI.map((item) => {
    return {
      id: item.id.toString(),
      label: item.title,
    };
  });
}
