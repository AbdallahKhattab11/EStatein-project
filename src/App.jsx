import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import TopBanner from "./components/TopBanner/TopBanner";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Properties = lazy(() => import("./pages/Properties/Properties"));
const Services = lazy(() => import("./pages/Services/Services"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails/PropertyDetails"));
// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  return (
    <div className="App text-3xl font-bold" role="application">
      <Router>
        <TopBanner />
        <Navbar />
        <main role="main">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/property-details" element={<PropertyDetails />} />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </div>
  );
};

export default App;
