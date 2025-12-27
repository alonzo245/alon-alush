import React from "react";
import App from "./App";
import { GlobalStateProvider } from "./shared/hooks/useGlobalState";

export default function AppWrapper(): React.JSX.Element {
    return (
        <GlobalStateProvider>
            <App />
        </GlobalStateProvider>
    );
}

