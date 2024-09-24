import React, { useEffect, useState } from "react";

const ScrollTop = ({ darkMode, setDarkMode }) => {
  const [visibility, setVisibility] = useState(false);

  const scrollBtn = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenScroll = () => {
    let heightToHide = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHide) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => window.removeEventListener("scroll", listenScroll);
  }, []);

  return (
    <>
      {visibility && (
        <div
          className={`flex items-center cursor-pointer justify-center rounded-full  ${
            darkMode ? "bg-[#ffff00]" : "bg-[#1F1A38]"
          }  fixed w-12 h-12 right-4 bottom-20 lg:right-20 z-20 animate-bounce `}
          onClick={scrollBtn}
        >
          <img
            src="./../../img/arrow-left.svg"
            className={`rotate-90 ${darkMode ? "" : "invert"}  cursor-pointer`}
            alt="arrow_top"
          />
        </div>
      )}
    </>
  );
};

export default ScrollTop;
