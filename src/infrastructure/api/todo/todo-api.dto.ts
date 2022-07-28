export type ToDoAPIInterface = ToDoItemAPIInterface[];

export type ToDoItemAPIInterface = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
