import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CiDark, CiMenuBurger } from "react-icons/ci";
import { CgDarkMode } from "react-icons/cg";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const displayRef = useRef();
  const navRef = useRef();
  const navLinks = useRef();
  const navigate = useNavigate();
  const [navBgCol, setNavBgCol] = useState(false);
  const displayNav = () => {
    displayRef.current.style.width = "200px";
  };

  const closeNav = () => {
    displayRef.current.style.width = "0";
  };

  function bgColor() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setNavBgCol(true);
    } else {
      setNavBgCol(false);
    }
  }

  window.onscroll = function () {
    bgColor();
  };

  return (
    <>
      <nav
        id="navbar"
        className={`flex  items-center justify-between sm:px-3 lg:px-14 py-3 sticky top-0 left-0 z-[999]  transition-all duration-200 ${
          navBgCol &&
          `bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-sm ${
            darkMode ? "bg-transparent" : "bg-blue-50"
          }`
        } `}
        ref={navRef}
      >
        <div
          id="hamburger"
          className="hamburger cursor-pointer lg:hidden left-2 p-[2px]  mx-2 "
          onClick={displayNav}
        >
          <img
            src="./../../img/menu.svg"
            className={`${
              darkMode ? "invert" : ""
            }  p-1 border rounded-md hover:border-black hover:bg-black hover:bg-opacity-20 transition-all duration-300 `}
            alt="menu"
          />
        </div>

        <div className="logo py-2 px-[2px] cursor-pointer">
          <a href="/">
            <h3
              className={`text-lg mr-3 ${
                darkMode ? "text-white" : "text-[#1F1A38]"
              }  font-bold `}
            >
              Mustafa.dev
            </h3>
          </a>
        </div>
        <ul
          className="lg:flex items-center justify-center  space-x-8  hidden px-3 "
          ref={navLinks}
        >
          <li
            title="Home"
            className={`${
              location.pathname == "/" ? "bg-[#1F1A38] text-[#ffff00]" : ""
            } hover:bg-[#1F1A38] px-[5px] py-[2px] hover:text-[#ffff00] transition-all duration-200`}
          >
            <Link to="/" className="px-[5px] py-[2px] font-bold">
              Home
            </Link>
          </li>
          <li
            title="About"
            className={`${
              location.pathname == "/about" ? "bg-[#1F1A38] text-[#ffff00]" : ""
            } hover:bg-[#1F1A38] px-[5px] py-[2px] hover:text-[#ffff00] transition-all duration-200`}
          >
            <Link to="/about" className="px-[5px] py-[2px] font-bold">
              About Me
            </Link>
          </li>
          <li
            title="Portfolio"
            className={`${
              location.pathname == "/portfolio"
                ? "bg-[#1F1A38] text-[#ffff00]"
                : ""
            } hover:bg-[#1F1A38] px-[5px] py-[2px] hover:text-[#ffff00] transition-all duration-200`}
          >
            <Link to="/portfolio" className="px-[5px] py-[2px] font-bold">
              Portfolio
            </Link>
          </li>
          <li
            title="Contact"
            className={`${
              location.pathname == "/contact"
                ? "bg-[#1F1A38] text-[#ffff00]"
                : ""
            } hover:bg-[#1F1A38] px-[5px] py-[2px] hover:text-[#ffff00] transition-all duration-200`}
          >
            <Link to="/contact" className="px-[5px] py-[2px] font-bold">
              Contact me
            </Link>
          </li>
          <li
            title="toggle dark mode"
            className={`flex items-center justify-center px-[5px] py-[3px] transition-all duration-200`}
          >
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                className="sr-only peer"
                value=""
                type="checkbox"
                onChange={() => setDarkMode((prev) => !prev)}
              />
              <div className="w-14 h-7 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
            </label>
          </li>
        </ul>
      </nav>
      <ul
        id="display"
        className="h-full  flex overflow-x-hidden bg-[#111] items-center justify-center flex-col fixed py-4 space-y-8  top-0 left-0 z-[9999999] w-[0] transition-all duration-300"
        ref={displayRef}
      >
        <li
          id="close"
          className=" absolute top-0 right-0  transition-all duration-300 py-1 px-1 m-2"
          onClick={closeNav}
        >
          <img
            src="./../../img/x.svg"
            className="filter invert cursor-pointer"
            alt="close_nav"
          />
        </li>
        <li className="hover:underline  hover:text-[#f1f1f1] underline-offset-4 mx-3 text-[#818181]">
          <a
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
              closeNav();
            }}
          >
            Home
          </a>
        </li>
        <li className="hover:underline hover:text-[#f1f1f1] underline-offset-4 text-[#818181]">
          <a
            className="cursor-pointer"
            onClick={() => {
              navigate("/about");
              closeNav();
            }}
          >
            About Me
          </a>
        </li>
        <li className="hover:underline hover:text-[#f1f1f1] underline-offset-4 text-[#818181]">
          <a
            className="cursor-pointer"
            onClick={() => {
              navigate("/portfolio");
              closeNav();
            }}
          >
            Portfolio
          </a>
        </li>
        <li className="hover:underline hover:text-[#f1f1f1] text-[#818181] underline-offset-4">
          <a
            className="cursor-pointer"
            onClick={() => {
              navigate("/contact");
              closeNav();
            }}
          >
            Contact me
          </a>
        </li>
        <li
          title="toggle dark mode"
          className={`flex items-center justify-center px-[5px] py-[3px] transition-all duration-200`}
        >
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              className="sr-only peer"
              value=""
              type="checkbox"
              onChange={() => setDarkMode((prev) => !prev)}
            />
            <div className="w-12 h-5 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-4 before:w-4 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-sm shadow-gray-400 peer-checked:shadow-sm peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-4 after:h-4 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
          </label>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
