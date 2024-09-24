import React from "react";
import { BiMailSend } from "react-icons/bi";

const Contact = ({ darkMode, setDarkMode }) => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
  return (
    <>
      <section className="w-full mt-[5rem] md:w-[90%] md:mr-auto md:ml-auto md:mt-[6rem] lg:mt-[7rem] xl:mt-[8rem] 2xl:mt-[9rem] flex items-start justify-around flex-col md:items-start px-3 xsm:px-11 sm:px-24 md:px-8 lg:px-[9rem] xl:px-[14rem] 2xl:px-[16rem]  gap-12">
        <div className="space-y-3">
          <p className="">
            <span className="font-bold text-[13px] bg-[#1F1A38] px-[4px] py-[2px] text-[#ffff00]">
              CONTACT ME
            </span>
          </p>
          <h3 className="font-bold text-base sm:text-lg">
            Type it up it works.🙌
          </h3>
        </div>

        <div className="space-y-3">
          <div
            className={`p-2 ${
              darkMode ? "hover:text-black" : ""
            } hover:bg-[#e8f4ff] border border-white hover:border-[#fff178] transition-all`}
          >
            <a
              href="mailto:mustafamulla765@gmail.com"
              className="flex items-center justify-start space-x-3"
              target="_blank"
            >
              <span>
                {" "}
                <BiMailSend className="text-[20px]" />
              </span>
              <span>mustafamulla765@gmail.com</span>
            </a>
          </div>
          <form
            action="https://formspree.io/f/xwkdevla"
            method="POST"
            className="form flex flex-col space-y-2 justify-center text-black mt-6 lg:mt-0 mb-3"
            id="form"
          >
            <div className="space-y-2">
              <input
                name="name"
                type="text"
                placeholder="john"
                className="px-4 py-2 w-full sm:w-fit  rounded-[3px] bg-[#e8f4ff] placeholder:text-[#5a5959] focus:outline focus:outline-[#ababab] mr-2 outline-none transition-[border] "
                autoComplete="off"
                required
                minLength={3}
              />
              <input
                name="email"
                type="email"
                placeholder="john@gmail.com"
                className="px-4 py-2 w-full sm:w-fit bg-[#e8f4ff] focus:outline placeholder:text-[#5a5959] focus:outline-[#ababab] rounded-[3px] outline-none transition-[border] "
                autoComplete="off"
                required
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="px-4 py-2 bg-[#e8f4ff] focus:outline placeholder:text-[#5a5959] focus:outline-[#ababab] rounded-[3px] outline-none transition-[border]"
              autoComplete="off"
              minLength={3}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              id=""
              cols="30"
              rows="5"
              className="px-4 py-2 bg-[#e8f4ff] focus:outline placeholder:text-[#5a5959] focus:outline-[#ababab] rounded-[3px] outline-none transition-[border]"
              autoComplete="off"
              minLength={5}
              required
            ></textarea>
            <div>
              <button
                className="font-bold  bg-[#2a2a2a] hover:bg-[black] hover:text-[#ffff00] transition-colors text-white px-3 py-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
