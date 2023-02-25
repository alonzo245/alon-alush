import React from "react";
import App from "./App";
import { GlobalStateProvider } from "./hooks/useGlobalState";

export default function () {
    return (
        <GlobalStateProvider>
            <App />
        </GlobalStateProvider>
    );
}
