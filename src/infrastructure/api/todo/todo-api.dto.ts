export type ToDoAPIInterface = ToDoItemAPIInterface[];

type ToDoItemAPIInterface = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
