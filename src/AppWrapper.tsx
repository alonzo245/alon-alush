import React from "react";
import App from "./App";
import { GlobalStateProvider } from "./hooks/useGlobalState";

export default function AppWrapper(): React.JSX.Element {
    return (
        <GlobalStateProvider>
            <App />
        </GlobalStateProvider>
    );
}

