import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa6";
import { BiLogoGithub, BiLogoJavascript, BiLogoLinkedin } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";

const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <section className="snap-center h-[90vh] md:h-[57vh] lg:h-[75vh] xl:h-[90vh] 2xl:h-[95vh] w-full flex items-center justify-center  sm:px-9 md:px-14 lg:px-28 xl:px-32 2xl:px-40 md:justify-around ">
        <div>
          <div
            className="info flex items-center flex-col md:flex-row-reverse md:justify-between md:gap-3"
            style={{
              fontFamily: "Work Sans, sans-serif ",
            }}
          >
            <div className="animate-change-radius m-auto flex items-center justify-center z-[1] overflow-x-hidden bg-[#1F1A38] relative  h-[200px] w-[200px] md:h-[240px] md:w-[240px] lg:h-[300px] lg:w-[280px] xl:h-[290px] xl:w-[295px] 2xl:w-[320px] 2xl:h-[315px] border border-purple-600">
              <img
                src="./../../img/mustafa.png"
                className="h-full rounded w-full absolute bottom-0"
                alt="mustafa_image"
                loading="lazy"
                style={{ filter: "drop-shadow(2px 4px 6px black)" }}
              />
            </div>
            <div className="px-3 xsm:px-11 sm:px-24 md:px-8 md:w-[475px] lg:w-[610px]">
              <h1
                className={` text-[27px] select-none relative z-10 pt-[1rem] font-bold ${
                  darkMode ? "text-white" : "text-[#1F1A38]"
                }  mt-5 tracking-tighter leading-8 sm:leading-[52px] sm:text-4xl md:text-[43px] lg:text-[50px] lg:tracking-wide mb-4 xsm:text-[34px]`}
              >
                Front-End React Developer👋
              </h1>
              <p className="text-[15px] font-normal tracking-wide md:mt-2">
                Hi, I'm{" "}
                <span className="bg-[#1F1A38] px-[4px] py-[2px] text-[#ffff00]">
                  Mustafa Mulla
                </span>
                . A passionate Front-End Developer based in Goa, India. 📍
              </p>
              <div className="flex items-center  gap-4 mt-3">
                <div
                  className={`py-2 px-2  rounded-3xl ${
                    darkMode ? "hover:bg-[#4f575f] " : "hover:bg-[#e8f4ff]"
                  }   hover:border-[#fff178]`}
                >
                  <a
                    href="https://www.linkedin.com/in/mustafa-mulla-53846221a/"
                    target="_blank"
                  >
                    <BiLogoLinkedin className="text-[24px] hover:scale-110 transition-all" />
                  </a>
                </div>
                <div
                  className={`py-2 px-2  rounded-3xl ${
                    darkMode ? "hover:bg-[#4f575f]  " : "hover:bg-[#e8f4ff]"
                  }   hover:border-[#fff178]`}
                >
                  <a href="https://github.com/MustafaMulla29" target="_blank">
                    <BiLogoGithub className="text-[24px] hover:scale-110 transition-all" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-9 mt-8 text-[15px]">
                <div>
                  <p>Teck Stack |</p>
                </div>
                <div className="flex gap-2 xsm:gap-6 sm:gap-9 md:gap-10 lg:gap-14">
                  <span className="text-2xl">
                    <AiFillHtml5 />
                  </span>
                  <span className="text-2xl">
                    <FaCss3Alt />
                  </span>
                  <span className="text-2xl">
                    <BiLogoJavascript />
                  </span>
                  <span className="text-2xl">
                    <SiTailwindcss />
                  </span>
                  <span className="text-2xl">
                    <FaReact />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
