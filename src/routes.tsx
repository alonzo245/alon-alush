import { RouteObject } from "react-router-dom";
import Home from "./features/home/Home";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/alon-alush",
        element: <Home />,
    },
];

