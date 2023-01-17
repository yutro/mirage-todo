import { useQueryClient } from "@tanstack/react-query";
import {
  GetTodosQuery,
  namedOperations,
  Todo,
  useAddTodoMutation,
} from "../generated";

export const AddTodo = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { mutate: addTodo, isLoading } = useAddTodoMutation({
    onError: () => {
      alert("todo not created :(");
    },
  });

  return (
    <form
      className="mt-10"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;

        const [{ value: content }] =
          form as unknown as ReadonlyArray<HTMLInputElement>;

        addTodo(
          {
            input: { content },
          },
          {
            onSuccess: ({ addTodo: { id } }) => {
              queryClient.setQueryData<GetTodosQuery>(
                [namedOperations.Query.getTodos],
                (oldData) => {
                  const todo: Todo = { id, completed: false, content };
                  const todos = oldData?.todos
                    ? [...oldData.todos, todo]
                    : [todo];

                  return { todos };
                }
              );
            },
          }
        );
      }}
    >
      <input
        disabled={isLoading}
        type="text"
        placeholder="Type todo text here"
        className="border indent-1 mr-2"
      />
      <button disabled={isLoading} type="submit" className="border px-2">
        Add
      </button>
    </form>
  );
};
