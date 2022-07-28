import { createContext, useContext, useState } from "react";
import { StoreInterface } from "../types/store.type";
import { defaultToDoContext, useToDo } from "./todo";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

const defaultContext: StoreInterface = {
  ...defaultToDoContext,
};

const Context = createContext<StoreInterface>(defaultContext);

export const ApplicationContextProvider = ({ children }: ProviderProps) => {
  const [toDoItems, setToDoItems] = useToDo();

  const values = {
    toDoItems,
    setToDoItems,
  };

  return <Context.Provider value={values as any}>{children}</Context.Provider>;
};

export const useApplicationContext = () => useContext(Context);
