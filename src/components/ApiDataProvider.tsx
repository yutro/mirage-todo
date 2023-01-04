import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
const client = new QueryClient();
export const ApiDataProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
