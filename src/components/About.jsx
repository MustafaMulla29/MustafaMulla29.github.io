import React from "react";

const About = () => {
  return (
    <>
      <section className="w-full mt-24 mb-16 md:mb-12 md:h-[55vh] md:mt-12 flex items-center justify-center flex-col  md:flex-row px-3 xsm:px-11 sm:px-24 md:px-8 lg:px-28 xl:px-32 2xl:px-40  gap-12">
        <div className="">
          <img
            src="./../../img/about-img.jpg"
            className="rounded-lg w-[400px] h-[250px] object-cover"
            alt="about_image"
            loading="lazy"
          />
        </div>
        <div className="mt-[30px] md:mt-[0px] md:w-[350px] space-y-2">
          <p className=" mb-4 ">
            <span className="font-bold text-[13px] bg-[#1F1A38] px-[4px] py-[2px] text-[#ffff00]">
              ABOUT ME
            </span>
          </p>
          <h3 className="font-bold text-[16px] sm:text-[18px]">
            A dedicated Front-End Developer
          </h3>
          <p className="text-justify">
            Greetings! I'm Mustafa Mulla, a passionate front-end developer with
            a knack for crafting immersive and intuitive user experiences. With
            a foundation in HTML, CSS, and JavaScript, coupled with proficiency
            in React.js and Tailwind CSS, I bring ideas to life through clean,
            elegant code.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
