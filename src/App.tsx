import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App(): JSX.Element {

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

