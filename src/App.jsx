import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Properties from "./pages/Properties/Properties";
import Services from "./pages/Services/Services";
import ContactUs from "./pages/ContactUs/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import TopBanner from "./components/TopBanner/TopBanner";

const App = () => {
  return (
    <div className="App text-3xl font-bold ">
      <Router>
        <TopBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
