import React, { useRef } from "react";
import { BiLinkAlt, BiLogoGithub } from "react-icons/bi";
import { AiFillApi } from "react-icons/ai";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiBootstrap,
  SiExpress,
  SiMaterialdesign,
  SiMaterialdesignicons,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const Porfolio = ({ darkMode, setDarkMode }) => {
  // const videoRef = useRef(null);

  // const handleMouseEnter = () => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // };

  // const handleMouseOut = () => {
  //   if (videoRef.current) {
  //     videoRef.current.pause();
  //   }
  // };

  return (
    <main className="mt-[5rem] md:mt-[6rem] lg:mt-[7rem] xl:mt-[8rem] 2xl:mt-[9rem]">
      <section
        id="portfolio"
        className="w-full  md:w-[90%] md:mr-auto md:ml-auto  flex items-start justify-around flex-col md:items-start px-3 xsm:px-11 sm:px-24 md:px-8 lg:px-[9rem] xl:px-[14rem] 2xl:px-[16rem]  gap-12"
      >
        <div className="space-y-3">
          <p className="">
            <span className="font-bold text-[13px] bg-[#1F1A38] px-[4px] py-[2px] text-[#ffff00]">
              PORTFOLIO
            </span>
          </p>

          <h3 className="font-bold text-base sm:text-lg">
            Empowering Ideas With Seamless Code: Explore My Web Development
            Portfolio🧩
          </h3>
        </div>
        <div className="flex items-center justify-center flex-col gap-10 md:gap-12 lg:gap-16 ">
          <div className="space-y-3 md:space-y-0 md:flex md:items-center md:justify-center md:flex-row-reverse md:gap-6 lg:gap-8 ">
            <div className="w-full m-auto">
              <img
                src="./../../img/babysitEase.png"
                className="rounded-xl w-full h-full"
                loading="lazy"
                alt="babysitEase"
              />
            </div>
            <div className=" space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-7 w-[90%]">
              <div>
                <h3 className="font-bold mb-3">BabysitEase</h3>
                <p className="text-justify">
                  For my third year BCA project, I developed a comprehensive
                  full stack website designed to connect users with babysitters
                  or nurses for child and parent care. The platform includes
                  roles for clients (who book caregivers), caregivers
                  (babysitters/nurses), and an admin to manage the system. Key
                  features of the project include authentication, email
                  notifications, profile management, caregiver bookings, rating
                  and feedback systems, and robust search functionality. This
                  project also incorporated an admin dashboard to oversee and
                  manage the entire process, ensuring a seamless experience for
                  all users involved.
                </p>
              </div>
              <div className="space-x-2 sm:space-x-3 flex items-center  md:space-x-4 lg:space-x-5  xl:space-x-7 2xl:space-x-7">
                <span
                  className={` ${
                    darkMode && "text-black"
                  } bg-[#b4dcfe] font-bold bg-opacity-60 py-[2px] px-[8px]`}
                >
                  Stack
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <FaReact />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <SiTailwindcss />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <SiMongodb />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <SiExpress />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <FaNodeJs />
                </span>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <div className="flex space-x-1  bg-[#1f1a38] py-[3px] px-[5px] text-[#ffff00] rounded-full hover:bg-white hover:text-black transition-all">
                  <span>
                    <a
                      href="https://github.com/MustafaMulla29/"
                      className="flex"
                      target="_blank"
                    >
                      <span className="font-bold">Code</span>
                      <BiLogoGithub className="text-2xl" />
                    </a>
                  </span>
                </div>
                <div>
                  <span>|</span>
                </div>
                <div
                  className={`flex space-x-1  hover:bg-[#1f1a38] py-[3px] px-[6px] hover:text-[#ffff00] rounded-full bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }  transition-all`}
                >
                  {" "}
                  <span>
                    <a
                      href="https://lnkd.in/gaEfeNQ8"
                      className="flex gap-1"
                      target="_blank"
                    >
                      <span className="font-bold">Live</span>
                      <span>
                        <BiLinkAlt className="text-[22px]" />
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-0 md:flex md:items-center md:justify-center md:gap-6 lg:gap-8 ">
            <div className="w-full m-auto">
              <img
                src="./../../img/img_gallery1.png"
                className="rounded-xl w-full h-full"
                loading="lazy"
                alt="img_gallery1"
              />
            </div>
            <div className=" space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-7 w-[90%]">
              <div>
                <h3 className="font-bold mb-3">Image Gallery</h3>
                <p className="text-justify">
                  This project allows users to input search queries, fetching
                  relevant images from the Unsplash API. The user-friendly
                  interface provides an intuitive experience, showcasing a
                  diverse collection of high-quality images tailored to
                  individual preferences. It's a visually engaging and seamless
                  platform for users to explore and discover captivating images
                  effortlessly.
                </p>
              </div>
              <div className="space-x-2 sm:space-x-3 flex items-center  md:space-x-4 lg:space-x-5  xl:space-x-7 2xl:space-x-7">
                <span
                  className={` ${
                    darkMode && "text-black"
                  } bg-[#b4dcfe] font-bold bg-opacity-60 py-[2px] px-[8px]`}
                >
                  Stack
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <FaHtml5 />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <FaCss3Alt />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <SiBootstrap />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <FaReact />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <AiFillApi />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <SiVite />
                </span>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <div className="flex space-x-1  bg-[#1f1a38] py-[3px] px-[5px] text-[#ffff00] rounded-full hover:bg-white hover:text-black transition-all">
                  <span>
                    <a
                      href="https://github.com/MustafaMulla29"
                      className="flex"
                      target="_blank"
                    >
                      <span className="font-bold">Code</span>
                      <BiLogoGithub className="text-2xl" />
                    </a>
                  </span>
                </div>
                <div>
                  <span>|</span>
                </div>
                <div
                  className={`flex space-x-1  hover:bg-[#1f1a38] py-[3px] px-[6px] hover:text-[#ffff00] rounded-full bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }  transition-all`}
                >
                  {" "}
                  <span>
                    <a
                      href="https://galleryx.netlify.app/"
                      className="flex gap-1"
                      target="_blank"
                    >
                      <span className="font-bold">Live</span>
                      <span>
                        <BiLinkAlt className="text-[22px]" />
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-0 md:flex md:items-center md:justify-center md:flex-row-reverse md:gap-6 lg:gap-8 ">
            <div className="w-full m-auto">
              <img
                src="./../../img/note_taking.png"
                className="rounded-xl w-full h-full"
                loading="lazy"
                alt="note_taking"
              />
            </div>
            <div className=" space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-7 w-[90%]">
              <div>
                <h3 className="font-bold mb-3">Note taking app</h3>
                <p className="text-justify">
                  Experience seamless note-taking with our MERN stack app
                  featuring secure signup/login, note creation, editing, and
                  deletion functionalities. Effortlessly filter notes using the
                  search option and reduce eye strain with the convenient dark
                  mode. Built for efficiency and security, this app provides a
                  streamlined and responsive platform for managing your
                  important notes.
                </p>
              </div>
              <div className="space-x-2 sm:space-x-3 flex items-center  md:space-x-4 lg:space-x-5  xl:space-x-7 2xl:space-x-7">
                <span
                  className={` ${
                    darkMode && "text-black"
                  } bg-[#b4dcfe] font-bold bg-opacity-60 py-[2px] px-[8px]`}
                >
                  Stack
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <SiMongodb />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <SiExpress />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <FaReact />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <SiBootstrap />
                </span>
                <span>|</span>
                <span className="font-bold text-[18px] sm:text-[20px]">
                  <SiNodedotjs />
                </span>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <div className="flex space-x-1  bg-[#1f1a38] py-[3px] px-[5px] text-[#ffff00] rounded-full hover:bg-white hover:text-black transition-all">
                  <span>
                    <a
                      href="https://github.com/MustafaMulla29"
                      className="flex"
                      target="_blank"
                    >
                      <span className="font-bold">Code</span>

                      <BiLogoGithub className="text-[22px]" />
                    </a>
                  </span>
                </div>
                <div>
                  <span>|</span>
                </div>
                <div
                  className={`flex space-x-1  hover:bg-[#1f1a38] py-[3px] px-[6px] hover:text-[#ffff00] rounded-full bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }  transition-all`}
                >
                  {" "}
                  <span>
                    <a href="" className="flex gap-1" target="_blank">
                      <span className="font-bold">Live</span>
                      <span>
                        <BiLinkAlt className="text-[22px] " />
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-0 md:flex md:items-center md:justify-start md:flex-row md:gap-6 lg:gap-8 ">
            <div className="w-full m-auto">
              <img
                src="./../../img/online_delivery1.png"
                className="rounded-xl w-full h-full"
                loading="lazy"
                alt="online_delivery1"
              />
            </div>
            <div className=" space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-7 w-[90%]">
              <div>
                <h3 className="font-bold mb-3">Landing page</h3>
                <p className="text-justify">
                  Presenting a sleek and minimalist landing page designed for
                  restaurants or hotels. This project boasts a clean and
                  intuitive design, ensuring a seamless user experience. The
                  landing page is not only visually appealing but also fully
                  responsive, adapting flawlessly to various devices for optimal
                  accessibility. With a focus on simplicity, this project aims
                  to captivate visitors with an elegant design that effortlessly
                  communicates the essence of the restaurant or hotel.
                </p>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <span
                  className={` ${
                    darkMode && "text-black"
                  } bg-[#b4dcfe] font-bold bg-opacity-60 py-[2px] px-[8px]`}
                >
                  Stack
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaHtml5 />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaCss3Alt />
                </span>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <div className="flex space-x-1  bg-[#1f1a38] py-[3px] px-[5px] text-[#ffff00] rounded-full hover:bg-white hover:text-black transition-all">
                  <span>
                    <a
                      href="https://github.com/MustafaMulla29"
                      className="flex"
                      target="_blank"
                    >
                      <span className="font-bold">Code</span>

                      <BiLogoGithub className="text-[22px]" />
                    </a>
                  </span>
                </div>
                <div>
                  <span>|</span>
                </div>
                <div
                  className={`flex space-x-1  hover:bg-[#1f1a38] py-[3px] px-[6px] hover:text-[#ffff00] rounded-full bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }  transition-all`}
                >
                  {" "}
                  <a
                    href="https://mustafamulla29.github.io/dummy_landing_page_html_css/"
                    className="flex gap-1"
                    target="_blank"
                  >
                    <span className="font-bold">Live</span>
                    <span>
                      <BiLinkAlt className="text-[22px]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-0 md:flex md:items-center md:justify-start md:flex-row-reverse md:gap-6 lg:gap-8 ">
            <div className="w-full m-auto">
              <img
                src="./../../img/news_app1.png"
                className="rounded-xl w-full h-full"
                loading="lazy"
                alt="news_app1"
              />
              {/* <video
                className="rounded-xl w-full h-full"
                src="./../../img/NewsMonkey - General - Google Chrome 2023-01-08 12-16-58.mp4"
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
              ></video> */}
            </div>
            <div className=" space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-7 w-[90%]">
              <div>
                <h3 className="font-bold mb-3">News Web App</h3>
                <p className="text-justify">
                  Introducing a dynamic news platform powered by the News API,
                  delivering users top headlines from around the globe. This
                  website offers a curated selection of news across diverse
                  categories, including politics, general updates, sports,
                  science, and technology. With a user-friendly interface, it
                  provides an efficient and engaging way for users to stay
                  informed on the latest developments in various fields.
                  Experience real-time news coverage seamlessly organized for
                  your convenience.
                </p>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <span
                  className={` ${
                    darkMode && "text-black"
                  } bg-[#b4dcfe] font-bold bg-opacity-60 py-[2px] px-[8px]`}
                >
                  Stack
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaReact />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaBootstrap />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <AiFillApi />
                </span>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <div className="flex space-x-1  bg-[#1f1a38] py-[3px] px-[5px] text-[#ffff00] rounded-full hover:bg-white hover:text-black transition-all">
                  <span>
                    <a
                      href="https://github.com/MustafaMulla29"
                      className="flex"
                      target="_blank"
                    >
                      <span className="font-bold">Code</span>

                      <BiLogoGithub className="text-[22px]" />
                    </a>
                  </span>
                </div>
                <div>
                  <span>|</span>
                </div>
                <div
                  className={`flex space-x-1  hover:bg-[#1f1a38] py-[3px] px-[6px] hover:text-[#ffff00] rounded-full bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }  transition-all`}
                >
                  {" "}
                  <a
                    href="https://nimble-chimera-bb4837.netlify.app/"
                    className="flex gap-1"
                    target="_blank"
                  >
                    <span className="font-bold">Live</span>
                    <span>
                      <BiLinkAlt className="text-[22px]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-0 md:flex md:items-center md:justify-start md:flex-row md:gap-6 lg:gap-8 ">
            <div className="w-full m-auto">
              <img
                src="./../../img/ms_clone1.png"
                className="rounded-xl w-full h-full"
                loading="lazy"
                alt="ms_clone1"
              />
            </div>
            <div className=" space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-7 w-[90%]">
              <div>
                <h3 className="font-bold mb-3">Microsoft Clone</h3>
                <p className="text-justify">
                  Demonstrating my proficiency as a web developer, I
                  successfully recreated the official Microsoft website. This
                  project underscores my ability to translate design concepts
                  into a pixel-perfect and fully functional website. By
                  meticulously replicating the design elements, I showcase my
                  attention to detail and commitment to delivering a polished
                  and professional user experience.
                </p>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <span
                  className={` ${
                    darkMode && "text-black"
                  } bg-[#b4dcfe] font-bold bg-opacity-60 py-[2px] px-[8px]`}
                >
                  Stack
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaHtml5 />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaCss3Alt />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <SiTailwindcss />
                </span>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <div className="flex space-x-1  bg-[#1f1a38] py-[3px] px-[5px] text-[#ffff00] rounded-full hover:bg-white hover:text-black transition-all">
                  <span>
                    <a
                      href="https://github.com/MustafaMulla29"
                      className="flex"
                      target="_blank"
                    >
                      <span className="font-bold">Code</span>

                      <BiLogoGithub className="text-[22px]" />
                    </a>
                  </span>
                </div>
                <div>
                  <span>|</span>
                </div>
                <div
                  className={`flex space-x-1  hover:bg-[#1f1a38] py-[3px] px-[6px] hover:text-[#ffff00] rounded-full bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }  transition-all`}
                >
                  {" "}
                  <a
                    href="https://mustafamulla29.github.io/microsoft_clone_site/"
                    className="flex gap-1"
                    target="_blank"
                  >
                    <span className="font-bold">Live</span>
                    <span>
                      <BiLinkAlt className="text-[22px]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-0 md:flex md:items-center md:justify-start md:flex-row-reverse md:gap-6 lg:gap-8 ">
            <div className="w-full m-auto">
              <img
                src="./../../img/text_utils.png"
                className="rounded-xl w-full h-full"
                loading="lazy"
                alt="text_utils"
              />
            </div>
            <div className=" space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-7 w-[90%]">
              <div>
                <h3 className="font-bold mb-3">Text Modifier</h3>
                <p className="text-justify">
                  Introducing a versatile text modifier app that empowers users
                  to manipulate text effortlessly. With this user-friendly tool,
                  users can seamlessly convert text to uppercase or lowercase,
                  remove white spaces, count characters, and preview text
                  modifications in real-time. The app also offers the
                  convenience of copying the modified text for easy sharing or
                  usage. Simplify your text editing experience with this
                  all-in-one application that puts control and functionality at
                  your fingertips.
                </p>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <span
                  className={` ${
                    darkMode && "text-black"
                  } bg-[#b4dcfe] font-bold bg-opacity-60 py-[2px] px-[8px]`}
                >
                  Stack
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaHtml5 />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaReact />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <SiBootstrap />
                </span>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <div className="flex space-x-1  bg-[#1f1a38] py-[3px] px-[5px] text-[#ffff00] rounded-full hover:bg-white hover:text-black transition-all">
                  <span>
                    <a
                      href="https://github.com/MustafaMulla29"
                      className="flex"
                      target="_blank"
                    >
                      <span className="font-bold">Code</span>

                      <BiLogoGithub className="text-[22px]" />
                    </a>
                  </span>
                </div>
                <div>
                  <span>|</span>
                </div>
                <div
                  className={`flex space-x-1  hover:bg-[#1f1a38] py-[3px] px-[6px] hover:text-[#ffff00] rounded-full bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }  transition-all`}
                >
                  {" "}
                  <a
                    href="https://mustafamulla29.github.io/textutils/"
                    className="flex gap-1"
                    target="_blank"
                  >
                    <span className="font-bold">Live</span>
                    <span>
                      <BiLinkAlt className="text-[22px]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-0 md:flex md:items-center md:justify-start md:flex-row md:gap-6 lg:gap-8 ">
            <div className="w-full m-auto">
              <img
                src="./../../img/password_gen.png"
                className="rounded-xl w-full h-full"
                loading="lazy"
                alt="password_gen"
              />
            </div>
            <div className=" space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-7 w-[90%]">
              <div>
                <h3 className="font-bold mb-3">Password generator</h3>
                <p className="text-justify">
                  Introducing a robust Password Generator application designed
                  for user convenience. This versatile tool allows users to
                  tailor their password strength, choosing between weak, strong,
                  or super-strong options. With a simple click, the application
                  generates a secure password, meeting the user's specified
                  criteria. The added functionality of copying the generated
                  password ensures seamless integration into various accounts
                  and platforms. Experience hassle-free password creation with
                  this intuitive and user-friendly application.
                </p>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <span
                  className={` ${
                    darkMode && "text-black"
                  } bg-[#b4dcfe] font-bold bg-opacity-60 py-[2px] px-[8px]`}
                >
                  Stack
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaHtml5 />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaCss3Alt />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaReact />
                </span>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <div className="flex space-x-1  bg-[#1f1a38] py-[3px] px-[5px] text-[#ffff00] rounded-full hover:bg-white hover:text-black transition-all">
                  <span>
                    <a
                      href="https://github.com/MustafaMulla29"
                      className="flex"
                      target="_blank"
                    >
                      <span className="font-bold ">Code</span>

                      <BiLogoGithub className="text-[22px]" />
                    </a>
                  </span>
                </div>
                <div>
                  <span>|</span>
                </div>
                <div
                  className={`flex space-x-1  hover:bg-[#1f1a38] py-[3px] px-[6px] hover:text-[#ffff00] rounded-full bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }  transition-all`}
                >
                  {" "}
                  <a
                    href="https://passwordforyou.netlify.app/"
                    className="flex gap-1"
                    target="_blank"
                  >
                    <span className="font-bold ">Live</span>
                    <span>
                      <BiLinkAlt className="text-[22px]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-0 md:flex md:items-center md:justify-start md:flex-row-reverse md:gap-6 lg:gap-8 ">
            <div className="w-full m-auto">
              <img
                src="./../../img/weather1.png"
                className="rounded-xl w-full h-full"
                loading="lazy"
                alt="weather1"
              />
            </div>
            <div className=" space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-7 w-[90%]">
              <div>
                <h3 className="font-bold mb-3">Weather App</h3>
                <p className="text-justify">
                  Introducing a user-friendly Weather Application that offers
                  real-time weather details for cities and countries worldwide.
                  With a seamless interface, users can input their location
                  preferences, and the application fetches accurate weather data
                  using the OpenWeather API.
                </p>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <span
                  className={` ${
                    darkMode && "text-black"
                  } bg-[#b4dcfe] font-bold bg-opacity-60 py-[2px] px-[8px]`}
                >
                  Stack
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaHtml5 />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaCss3Alt />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <FaReact />
                </span>
                <span>|</span>
                <span className="font-bold text-[20px]">
                  <AiFillApi />
                </span>
              </div>
              <div className="space-x-3 flex items-center md:space-x-4 lg:space-x-5 xl:space-x-7 2xl:space-x-7">
                <div className="flex space-x-1  bg-[#1f1a38] py-[3px] px-[5px] text-[#ffff00] rounded-full hover:bg-white hover:text-black transition-all">
                  <span>
                    <a
                      href="https://github.com/MustafaMulla29"
                      className="flex"
                      target="_blank"
                    >
                      <span className="font-bold">Code</span>

                      <BiLogoGithub className="text-[22px]" />
                    </a>
                  </span>
                </div>
                <div>
                  <span>|</span>
                </div>
                <div
                  className={`flex space-x-1  hover:bg-[#1f1a38] py-[3px] px-[6px] hover:text-[#ffff00] rounded-full bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }  transition-all`}
                >
                  <a
                    href="https://grabweather.netlify.app/"
                    className="flex gap-1"
                    target="_blank"
                  >
                    <span className="font-bold">Live</span>
                    <span>
                      <BiLinkAlt className="text-[22px]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Porfolio;
