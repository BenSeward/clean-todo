import React, { useState } from "react";
import { useToDoList } from "../../application/services/todo/useToDoList";
import { ToDoItem } from "../../application/types/todo.type";
import { Checkbox } from "../shared/Checkbox";
import { Input } from "../shared/Input";
import styles from "./ToDoList.module.scss";

export function ToDoListItem({ id, label }: ToDoItem) {
  const { getToDoItem, updateToDoItem } = useToDoList();

  return (
    <div className={styles.todoItem}>
      <label htmlFor={`${id}`}>
        <Checkbox id={`${id}`} />
        <Input
          id={`${id}`}
          value={label}
          onChange={(e) => updateToDoItem(id, e)}
        />
      </label>
    </div>
  );
}
