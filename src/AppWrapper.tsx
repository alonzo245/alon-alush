import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react-router";
import App from "./App";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            refetchOnWindowFocus: false,
        },
    },
});

export default function AppWrapper(): React.JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <NuqsAdapter>
                <App />
            </NuqsAdapter>
        </QueryClientProvider>
    );
}
