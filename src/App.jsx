import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* baad me /courses, /bootcamp, etc. yahan add kar sakti ho */}
      </Routes>
    </>
  );
};

export default App;
