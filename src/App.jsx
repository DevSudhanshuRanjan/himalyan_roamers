import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rishikesh from "./pages/Rishikesh";
import Landour from "./pages/Landour";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rishikesh" element={<Rishikesh />} />
        <Route path="/Landour" element={<Landour />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
