import React, { useState } from "react";
import { useToDoList } from "../../application/services/todo/useToDoList";
import { ToDoItem } from "../../application/types/todo.type";
import { Checkbox } from "../shared/Checkbox";
import { Input } from "../shared/Input";
import styles from "./ToDoList.module.scss";

export function ToDoListItem({ id, label, completed }: ToDoItem) {
  const { updateToDoItem } = useToDoList();

  return (
    <div className={styles.todoItem}>
      <label htmlFor={`${id}`}>
        <Checkbox
          id={`${id}`}
          onChange={(e) => updateToDoItem(id, label, e.target.checked)}
        />
        <Input
          id={`${id}`}
          value={label}
          onChange={(event) =>
            updateToDoItem(id, event.target.value, completed)
          }
          disabled={completed}
        />
      </label>
    </div>
  );
}
