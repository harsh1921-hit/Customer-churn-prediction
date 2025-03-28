import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/Aboutus/Aboutus";
import Contact from "./Components/ContactUs/ContactUs";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page with the form */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="footer">
          <p>&copy; 2025 Harsh Kumar. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;