import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";

export default function App(): React.JSX.Element {

    return (
        <BrowserRouter>
            <Routes>
                {["/", "/alon-alush"].map((path) => (
                    <Route key={path} path={path} element={<Home />} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

