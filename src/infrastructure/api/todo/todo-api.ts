import { ToDoAPIInterface } from "./todo-api.dto";

export async function fetchToDoItems(): Promise<ToDoAPIInterface> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const allItems = await res.json();
  const reducedNumberOfItems = allItems.slice(0, 10);

  return reducedNumberOfItems;
}
