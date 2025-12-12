import React from "react";
import kodexlogo from "../assets/kodexlogo.svg";
import kodrlogo from "../assets/kodrlogo.svg";

const onlinePoints = [
  "Learn from anywhere with focused daily live sessions",
  "Premium MERN + AI curriculum built for real industry readiness",
  "Build projects using a modern stack (React, Firebase, Next.js, Tailwind, Node, MongoDB, Cloud)",
  "Fast doubt-solving with direct WhatsApp support",
  "Weekly competitions + regular mentor led tasks and challenges",
  "Build real-world projects with every module",
  "A structured learning system that keeps you disciplined",
  "Perfect for students balancing college or work life",
];

const offlinePoints = [
  "Learn in person with a focused, high-performance classroom environment",
  "Build stronger discipline with a consistent, structured daily routine",
  "Get instant on-spot mentor help for faster doubt-solving",
  "Experience real teamwork, live collaboration, and professional presentations",
  "More competitions, in-person tech activities, weekly code sprint challenges",
  "Perfect for students who want full focus and a driven community around them",
  "Sharpen communication and presentation skills through real practice",
  "Weekly personality development sessions to level up confidence and soft skills",
  "Thrive in a high-energy community that keeps you accountable",
  "Weekly offline mini-projects to build real momentum",
];

const Tick = () => (
  <svg
    className="h-4 shrink-0 mt-1.5"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11.5"
      cy="11.5"
      r="11"
      fill="#9685FE"
      fillOpacity="0.1"
      stroke="#9685FE"
    />
    <path
      d="M7 12.7538L9.45149 15L16 9"
      stroke="#9685FE"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsNew = () => {
  return (
    <section className="text-center text-gray-100 py-20 md:py-20">
      {/* Heading */}
      <h1 className="font-sans font-semibold leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem] max-md:text-[3.3rem]">
        What&apos;s New?
      </h1>
      <p className="md:mt-2 mt-1 lg:mt-3.5 max-w-[80%] mx-auto md:text-3xl text-lg lg:text-4xl text-white/50 font-[bwGrad-r] capitalize">
        What Makes{" "}
        <span className="accent text-[#9685FE]">This Bootcamp Better</span> Than
        the Rest?
      </p>

      {/* Difference line (desktop) */}
      <div className="hidden md:flex h-10 md:h-14 md:mb-1 mt-16 md:mt-32 lg:mt-44 justify-center w-[40%] mx-auto gap-2">
        <div className="h-full flex-1 lg:block hidden border-dashed border-l border-t rounded-tl-xl w-20" />
        <h2 className="text-center font-[bwGrad-r] hidden md:block md:-mt-6 text-3xl md:text-5xl lg:text-4xl">
          Difference
        </h2>
        <div className="h-full flex-1 lg:block hidden border-dashed rounded-tr-xl border-t border-r" />
      </div>

      {/* Cards wrapper */}
      <div className="md:w-[90%] max-md:mt-14 lg:w-[80%] lg:flex-row items-center lg:items-stretch flex flex-col justify-center gap-10 lg:gap-20 mx-auto">
        {/* Online card */}
        <div className="lg:w-[43%] mx-auto md:mx-0 w-[90%] shrink-0">
          {/* top logo from assets */}
          <img
            src={kodexlogo}
            alt="Kodex"
            className="mx-auto mb-5 h-10 md:h-12 object-contain"
          />

          <div
            className="py-14 border h-full border-white/20 px-4 text-left rounded-xl relative z-0 shadow-md overflow-hidden"
            style={{
              boxShadow: "rgba(43, 38, 73, 0.7) 0px 0px 20px 0px",
            }}
          >
            <h3 className="text-center relative z-1 font-sans font-semibold text-3xl md:text-5xl lg:text-4xl">
              Online BootCamp
            </h3>
            <p className="text-center relative z-[1] font-[bwGrad-t] md:mt-3 text-sm md:text-base mt-1.5 lg:mt-1 mb-3">
              An exclusive online bootcamp by Sheryians.
            </p>

            <ul className="w-[95%] mx-auto relative z-[1] text-left md:px-10 mt-8 lg:mt-10 space-y-3">
              {onlinePoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 font-[bwGrad-t] md:text-xl lg:text-base"
                >
                  <Tick />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Background grain image */}
            <div className="h-full w-full absolute left-0 top-0 transform-style-3d transition-transform duration-700 z-0">
              <img
                className="h-full w-full object-cover"
                alt="bg-grainy"
                src="https://bootcamp.sheryians.com/Grainy%20Background.svg"
              />
            </div>
          </div>
        </div>

        {/* Offline card */}
        <div className="lg:w-[43%] mx-auto md:mx-0 w-[90%] shrink-0">
          {/* top logo from assets */}
          <img
            src={kodrlogo}
            alt="Kodr"
            className="mx-auto mb-5 -mt-10 h-16 md:h-20 object-contain"
          />

          <div
            className="py-14 border h-full border-white/20 px-4 text-left rounded-xl relative z-0 shadow-md overflow-hidden"
            style={{
              boxShadow: "rgba(43, 38, 73, 0.7) 0px 0px 20px 0px",
            }}
          >
            <h3 className="text-center relative z-[1] font-sans font-semibold text-3xl md:text-5xl lg:text-4xl">
              Offline BootCamp
            </h3>
            <p className="text-center relative z-[1] font-[bwGrad-t] md:mt-3 text-sm md:text-base mt-1.5 lg:mt-1 mb-3">
              An exclusive offline bootcamp by Sheryians.
            </p>

            <ul className="w-[95%] mx-auto relative z-[1] text-left md:px-10 mt-8 lg:mt-10 space-y-3">
              {offlinePoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 font-[bwGrad-t] md:text-xl lg:text-base"
                >
                  <Tick />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Background grain image */}
            <div className="h-full w-full absolute left-0 top-0 transform-style-3d transition-transform duration-700 z-0">
              <img
                className="h-full w-full object-cover"
                alt="bg-grainy"
                src="https://bootcamp.sheryians.com/Grainy%20Background.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
