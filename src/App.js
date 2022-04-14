import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalState } from "./hooks/useGlobalState";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import { SiteWrapper } from "./pages/Home.style";

export default function App() {
    const { setState } = useGlobalState();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/alon-alush" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
