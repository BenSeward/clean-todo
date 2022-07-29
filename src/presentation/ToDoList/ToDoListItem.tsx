import React, { useState } from "react";
import { ToDoItem } from "../../application/types/todo.type";
import { Checkbox } from "../shared/Checkbox";
import { Input } from "../shared/Input";

export function ToDoListItem({ id, label }: ToDoItem) {
  const [value, setValue] = useState(label);

  return (
    <div>
      <label htmlFor={`${id}`}>
        <Checkbox id={`${id}`} />
        <Input id={`${id}`} value={value} onChange={(e) => setValue(e)} />
      </label>
    </div>
  );
}
