import { formattedToDoItems } from "../../../infrastructure/api/todo/todo-api";

export async function readToDoItems() {
  return await formattedToDoItems();
}
