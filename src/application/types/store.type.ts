import { ToDoItem } from "./todo.type";

export type StoreInterface = {
  toDoItems: ToDoItem[];
  setToDoItems: (toDoItems: ToDoItem[]) => void;
};
