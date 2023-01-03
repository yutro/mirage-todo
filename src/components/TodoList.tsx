import { useGetTodosQuery } from "../generated";

export const TodoList = (): JSX.Element => {
  const { isLoading, data, error } = useGetTodosQuery();

  if (isLoading) return <div>...loading</div>;
  if (error) return <div>Something went wrong :(</div>;
  if (!data) return <div>Something went wrong :(</div>;

  return (
    <ul className="my-10">
      {data.todos.map(({ id, content, completed }) => (
        <li key={id} className="flex justify-between">
          <p>{content}</p>
          <input type="checkbox" defaultChecked={completed} />
        </li>
      ))}
    </ul>
  );
};
