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

export function ApplicationContextProvider({ children }: ProviderProps) {
  const [toDoItems, setToDoItems] = useToDo();

  const values = {
    toDoItems,
    setToDoItems,
  };

  return <Context.Provider value={values as any}>{children}</Context.Provider>;
}

export function useApplicationContext() {
  return useContext(Context);
}
