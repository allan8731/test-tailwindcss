import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    Home,
    SnapScroll,
    NaviBar,
} from "./page";

const App = () => {
    return (
        <div>
            <Router>
            <NaviBar></NaviBar>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/SnapScroll" element={<SnapScroll />} />
                </Routes>
            </Router>
        </div>
    );
};
export default App;
