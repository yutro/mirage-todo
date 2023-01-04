import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";

export const ApiDataProvider = ({
  children,
  ...config
}: PropsWithChildren<QueryClientConfig>): JSX.Element => {
  const client = new QueryClient(config);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
