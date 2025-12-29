import React from "react";
import "./styles/App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";

function AppRoutes(): React.JSX.Element {
    const element = useRoutes(routes);
    return <>{element}</>;
}

export default function App(): React.JSX.Element {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}
