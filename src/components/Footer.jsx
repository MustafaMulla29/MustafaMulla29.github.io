import React from "react";
import {
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <section className="relative bottom-0 w-full mt-14 md:w-[90%] md:mr-auto md:ml-auto md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 flex items-center justify-between flex-col sm:flex-row md:items-start px-3 py-4 xsm:px-11 sm:px-24 md:px-8 lg:px-[9rem] xl:px-[14rem] 2xl:px-[16rem]  gap-12">
      <div className="w-full flex items-start justify-center flex-col-reverse gap-5 md:gap-0 md:w-[80%] md:items-center md:flex-row md:justify-between">
        <div>
          <p>@{new Date().getFullYear()} mustafamulla. All Rights Reserved</p>
        </div>
        <div className="flex space-x-3">
          <div
            className={`py-2 px-2 rounded-3xl ${
              darkMode ? "hover:bg-[#4f575f] " : "hover:bg-[#e8f4ff]"
            } hover:bg-[#e8f4ff] `}
          >
            <a href="https://github.com/MustafaMulla29" target="_blank">
              <BiLogoGithub
                className="text-[24px] hover:scale-110 transition-all"
                name="github"
              />
            </a>
          </div>
          <div
            className={`py-2 px-2 rounded-3xl ${
              darkMode ? "hover:bg-[#4f575f] " : "hover:bg-[#e8f4ff]"
            } hover:bg-[#e8f4ff] `}
          >
            <a
              href="https://www.linkedin.com/in/mustafa-mulla-53846221a/"
              target="_blank"
            >
              <BiLogoLinkedin
                className="text-[24px] hover:scale-110 transition-all"
                name="linkedin"
              />
            </a>
          </div>
          <div
            className={`py-2 px-2 rounded-3xl ${
              darkMode ? "hover:bg-[#4f575f] " : "hover:bg-[#e8f4ff]"
            } hover:bg-[#e8f4ff] `}
          >
            <a href="https://instagram.com/mus7afa___" target="_blank">
              <BiLogoInstagramAlt
                className="text-[24px] hover:scale-110 transition-all"
                name="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
