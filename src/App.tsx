import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";

export default function App(): React.JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alon-alush" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
