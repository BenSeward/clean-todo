import { useApplicationContext } from ".";
import { StoreInterface } from "../types/store.type";

export function useToDoListStorage(): StoreInterface {
  return useApplicationContext();
}
