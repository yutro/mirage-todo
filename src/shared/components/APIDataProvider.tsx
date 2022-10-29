import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export const APIDataProvider = ({
	children,
}: PropsWithChildren): JSX.Element => (
	<QueryClientProvider client={client}>{children}</QueryClientProvider>
);
