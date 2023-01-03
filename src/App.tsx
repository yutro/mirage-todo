import { TodoList } from "./components/TodoList";

const App = (): JSX.Element => (
  <div className="flex justify-center items-center min-h-screen">
    <main>
      <h1 className="text-4xl font-bold">Mirage ToDo</h1>
      <TodoList />
      <form className="mt-10">
        <input
          type="text"
          placeholder="Type todo text here"
          className="border indent-1 mr-2"
        />
        <button type="submit" className="border px-2">
          Add
        </button>
      </form>
    </main>
  </div>
);

export default App;
