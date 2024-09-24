import React from "react";
import { BiSolidDownload } from "react-icons/bi";

const Resume = () => {
  return (
    <>
      <section className="w-full mt-[5rem] md:w-[90%] md:mr-auto md:ml-auto md:mt-[6rem] lg:mt-[7rem] xl:mt-[8rem] 2xl:mt-[9rem] px-3 xsm:px-11 sm:px-24 md:px-8 lg:px-[9rem] xl:px-[14rem] 2xl:px-[16rem]">
        <div className="">
          <p className="">
            <span className="font-bold text-[13px] bg-[#1F1A38] px-[4px] py-[2px] text-[#ffff00]">
              MY RESUME
            </span>
          </p>
        </div>
        <div className="w-full mt-8  flex items-center md:items-start gap-8  justify-between flex-col-reverse md:flex-row">
          <div className="w-full max-w-lg ">
            <div className="flex items-start justify-center gap-7 md:gap-14 flex-col">
              <div className="space-y-3">
                <h3 className="font-bold text-base sm:text-lg">
                  Explore My Resume
                </h3>
                <p>
                  A dedicated front-end developer with a keen eye for design and
                  a passion for creating intuitive and visually appealing web
                  experiences. Armed with a robust skill set encompassing HTML5,
                  CSS3, React, and JavaScript, I bring a dynamic approach to
                  translating ideas into engaging digital interfaces.
                </p>
                <p>
                  My proficiency extends to leveraging the power of Tailwind CSS
                  to streamline development workflows and ensure pixel-perfect
                  designs. With a commitment to staying current with industry
                  trends and best practices, I thrive in collaborative
                  environments and am always eager to tackle new challenges.
                </p>
                <p>Let's build something extraordinary together!</p>
              </div>
              <div>
                <button className="bg-[#2a2a2a] hover:bg-[black] hover:text-[#ffff00] transition-colors text-white px-3 py-2">
                  <a
                    href="./../../img/Mustafa_mulla_resume.pdf"
                    download="Mustafa_mulla_resume.pdf"
                    className="flex items-center justify-center gap-2 hover:text-[#ffff00] transition-colors "
                  >
                    <span>
                      <BiSolidDownload className="text-sm" />
                    </span>
                    <span className="text-sm">Download Resume</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[17rem]">
            <figure>
              <img
                src="./../../img/mustafa_resume.png"
                className="w-full h-full rounded-xl shadow-lg "
                // style={{ boxShadow: "4px -3px #ffff00" }}
                alt="mustafa_resume"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
