import React from "react";
import HeroSection from "./Pages/HeroSection";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<Technologies />} />
      </Routes>
    </div>
  );
};

export default App;
