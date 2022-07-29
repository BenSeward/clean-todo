import { mappedToDoItems } from "../../../infrastructure/api/todo/todo-api.mapper";
import { useToDoListStorage } from "../../store/todo";

export function useToDoList() {
  const storage = useToDoListStorage();

  async function retreiveInitialToDoItems() {
    if (storage) return;

    const formattedItems = await mappedToDoItems();
    return formattedItems;
  }

  const getToDoItems = storage?.toDoItems || [];

  function getToDoItem(idToFind: string) {
    return storage.toDoItems.find((item) => item.id === idToFind) || [];
  }

  function createToDoItem() {
    const newItem = {
      id: Math.random().toString(),
      label: "another label",
    };

    storage.setToDoItems([...storage.toDoItems, newItem]);
  }

  function updateToDoItem(id: string, value: string) {
    if (!storage) return;

    const updatedItems = storage.toDoItems.map((item) => {
      if (item.id !== id) return item;

      return {
        ...item,
        label: value,
      };
    });

    return storage.setToDoItems(updatedItems);
  }

  return {
    retreiveInitialToDoItems,
    getToDoItems,
    createToDoItem,
    updateToDoItem,
    getToDoItem,
  };
}
