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
import Fincasaplana from "./pages/venues/Fincasaplana";
import Fincaencanto from "./pages/venues/Fincaencanto";
import LaVistamarina from "./pages/venues/LaVistamarina";
import Privatechef from "./pages/privatechef"
import Corporateevents from "./pages/Corporateevents"
import Privateevents from "./pages/Privateevents"
import PrivacyPolicy from "./pages/Privacypolicy";
import TermsAndConditions from "./pages/Termsandconditions";
import Gallery from "./pages/Gallery";
import NewGallery from "./pages/NewGallery";


import "bootstrap/dist/css/bootstrap.min.css";
import WhatsAppButton from "./components/common/Whatsapp";

const App = () => {
    return (
        <> 
        <Router> {/* Fix: BrowserRouter use karo */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/wedding-venues" element={<Weddingvenue />} />
                <Route path="/our-team" element={<Ourteam />} />
                <Route path="/contact-us" element={<Contactus />} />
                <Route path="/wedding-catering" element={<Catering />} />
                <Route path="/private-chef" element={<Privatechef />} />
                <Route path="/corporate-events" element={<Corporateevents />} />
                <Route path="/private-events" element={<Privateevents />} />
                <Route path="/club-nautico" element={<Clubnautico />} />
                <Route path="/finca-art" element={<Fincaart />} />
                <Route path="/new-gallery" element={<Gallery />} />
                <Route path="/gallery" element={<NewGallery />} />
                <Route path="/fincasa-plana" element={<Fincasaplana />} />
                <Route path="/finca-encanto" element={<Fincaencanto />} />
                <Route path="/la-vista-marina" element={<LaVistamarina />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-condition" element={<TermsAndConditions />} />
               
            </Routes>
        </Router>
        <WhatsAppButton/>
        </>
        
    );
};

export default App;
