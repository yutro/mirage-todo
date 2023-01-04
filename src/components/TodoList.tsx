import React from "react";
import { useGetTodosQuery } from "../generated";

export const TEXT = {
  loading: "...loading",
  error: "Something went wrong :(",
  noDataText: "No data something went wrong :(",
};

export const TodoList = (): JSX.Element => {
  const { isLoading, data, error } = useGetTodosQuery(undefined);
  console.log("-0-", isLoading, error, data, window.location);
  if (isLoading) return <div>{TEXT.loading}</div>;
  if (error) return <div>{TEXT.error}</div>;
  if (!data) return <div>{TEXT.noDataText}</div>;
  console.log("-1-", isLoading, data);
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
