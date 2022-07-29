import { createContext, useContext, useEffect, useState } from "react";
import { useToDoList } from "../services/todo/readToDoItems";
import { useToDoListStorage } from "./todo";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

const Context = createContext<any>(null);

export function ApplicationContextProvider({ children }: ProviderProps) {
  const [toDoItems, setToDoItems] = useState();
  const { retreiveInitialToDoItems } = useToDoList();

  useEffect(() => {
    function initializeAsyncContext() {
      if (!toDoItems) {
        retreiveInitialToDoItems().then((res) => setToDoItems(res as any));
      }
    }

    initializeAsyncContext();
  }, [toDoItems, retreiveInitialToDoItems]);

  const values = {
    toDoItems,
    setToDoItems,
  };

  return <Context.Provider value={values as any}>{children}</Context.Provider>;
}

export const useApplicationContext = () => useContext(Context);
