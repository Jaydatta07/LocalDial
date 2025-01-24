import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Advertisement from "./components/Advertisement";
import AboutUs from "./components/Aboutus";
import LoginSignup from "./components/signUpLogin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/advertise" element={<Advertisement />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
};

export default App;

