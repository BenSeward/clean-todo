import { ToDoList } from "../presentation/ToDoList";
import { Page } from "../presentation/shared/Page";

function Home(): JSX.Element {
  return (
    <Page title="To-Do App | CLEAN Architecture">
      <h1>Tasks</h1>
      <h4>
        This is a simple tasks app to demonstrate CLEAN architecture in a React
        environment.
      </h4>
      <ToDoList />
    </Page>
  );
}

export default Home;
