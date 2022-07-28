import { createContext, useContext, useState } from "react";
import { StoreInterface } from "../types/store.type";
import { ToDoItem } from "../types/todo.type";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

const defaultContext: StoreInterface = {
  toDoItems: [
    {
      id: 0,
      label: "This is a to do item",
    },
  ],
  setToDoItems: () => {},
};

const Context = createContext<StoreInterface>(defaultContext);

export const ApplicationContextProvider = ({ children }: ProviderProps) => {
  const [toDoItems, setToDoItems] = useState(defaultContext.toDoItems);

  const values = {
    toDoItems,
    setToDoItems,
  };

  return <Context.Provider value={values as any}>{children}</Context.Provider>;
};

export const useApplicationContext = () => useContext(Context);
