import { useGetTodosQuery } from "../generated";

export const TEXT = {
  loading: "...loading",
  error: "Error: something went wrong :(",
  noData: "No Data: something went wrong :(",
};

export const TodoList = (): JSX.Element => {
  const { isLoading, data, error } = useGetTodosQuery();

  if (isLoading) return <div>{TEXT.loading}</div>;
  if (error) return <div>{TEXT.error}</div>;
  if (!data) return <div>{TEXT.noData}</div>;

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
