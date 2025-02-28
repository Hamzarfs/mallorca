import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/About";
import Weddingvenue from "../src/pages/weddingvenue";

const App = () => {
    return (
        <Router> {/* Fix: BrowserRouter use karo */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/wedding-venues" element={<Weddingvenue />} />
            </Routes>
        </Router>
    );
};

export default App;
