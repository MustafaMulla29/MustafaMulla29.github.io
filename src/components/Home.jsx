import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} setDarkMode={setDarkMode} />
      <Portfolio darkMode={darkMode} setDarkMode={setDarkMode} />
      <Resume darkMode={darkMode} setDarkMode={setDarkMode} />
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default Home;
