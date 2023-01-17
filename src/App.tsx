import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const App = (): JSX.Element => (
  <div className="flex justify-center items-center min-h-screen">
    <main>
      <h1 className="text-4xl font-bold">Mirage ToDo</h1>
      <TodoList />
      <AddTodo />
    </main>
  </div>
);

export default App;
