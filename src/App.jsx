import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Porfolio from "./components/Portfolio";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  if (darkMode) {
    document.body.style.backgroundColor = "#1e1e20";
    document.body.style.color = "#e4e4e4";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#141414";
  }

  return (
    <>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollTop darkMode={darkMode} setDarkMode={setDarkMode} />
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </BrowserRouter>
    </>
  );
};

export default App;
