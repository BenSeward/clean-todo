import { ToDoItem } from "../../../application/types/todo.type";
import { ToDoAPIInterface } from "./todo-api.dto";

async function fetchToDoItems(): Promise<ToDoAPIInterface> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  return res.json();
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
