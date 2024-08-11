import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import WebDesign from "./pages/webDesign/webDesign";
import AppDesign from "./pages/appDesign/appDesign";
import GraphicDesign from "./pages/graphicDesign/graphicDesign";
import Locations from "./pages/locations/locations";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webDesign" element={<WebDesign />} />
        <Route path="/appDesign" element={<AppDesign />} />
        <Route path="/graphicDesign" element={<GraphicDesign />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
