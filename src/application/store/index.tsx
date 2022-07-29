import { createContext, useContext, useEffect, useState } from "react";
import { useToDoList } from "../services/todo/useToDoList";
import { ToDoItem } from "../types/todo.type";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

const Context = createContext<any>(null);

export function ApplicationContextProvider({ children }: ProviderProps) {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>();

  const { retreiveInitialToDoItems } = useToDoList();

  const values = {
    toDoItems,
    setToDoItems,
  };

  useEffect(() => {
    function initializeAsyncContext() {
      if (!toDoItems) {
        retreiveInitialToDoItems().then((res) => setToDoItems(res));
      }
    }

    initializeAsyncContext();
  }, [toDoItems, retreiveInitialToDoItems]);

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export const useApplicationContext = () => useContext(Context);
