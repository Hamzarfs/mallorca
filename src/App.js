import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/About";
import Weddingvenue from "../src/pages/weddingvenue";
import Ourteam from "./pages/Ourteam";
import Contactus from "./pages/Contactus";
import Catering from "./pages/Catering";
import Clubnautico from "./pages/venues/ClubNautico";
import Fincaart from "./pages/venues/Fincaart";
import Privatechef from "./pages/privatechef"
import Privateevent from "./pages/Privateevent"
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
    return (
        <Router> {/* Fix: BrowserRouter use karo */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/wedding-venues" element={<Weddingvenue />} />
                <Route path="/our-team" element={<Ourteam />} />
                <Route path="/contact-us" element={<Contactus />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/private-chef" element={<Privatechef />} />
                <Route path="/private-event" element={<Privateevent />} />
                <Route path="/club-nautico" element={<Clubnautico />} />
                <Route path="/finca-art" element={<Fincaart />} />

            </Routes>
        </Router>
    );
};

export default App;
