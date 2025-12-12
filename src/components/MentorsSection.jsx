import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LionBadge from "../assets/lion.svg";

const mentors = [
  {
    id: "harsh",
    firstName: "Harsh",
    lastName: "Sharma",
    photo: "https://bootcamp.sheryians.com/HPH.png",
    sectionBg: "https://bootcamp.sheryians.com/HBG.png",
    thumbBg: "https://bootcamp.sheryians.com/HBG.png",
    intro:
      "Your learning journey in this bootcamp is guided by Harsh Vandana Sharma — one of India’s leading MERN mentors with a decade of expertise and 1.5 lakh+ students trained.",
  },
  {
    id: "sarthak",
    firstName: "Sarthak",
    lastName: "Sharma",
    photo: "https://bootcamp.sheryians.com/SPH.png",
    sectionBg: "https://bootcamp.sheryians.com/SSBG.png",
    thumbBg: "https://bootcamp.sheryians.com/SSBG.png",
    intro:
      "Your learning journey in this bootcamp is guided by Sarthak Sharma brings deep frontend and React expertise, helping you understand complex UI concepts in a simple, practical way.",
  },
  {
    id: "devendra",
    firstName: "Devendra",
    lastName: "Dhote",
    photo: "https://bootcamp.sheryians.com/DPH.png",
    sectionBg: "https://bootcamp.sheryians.com/DBG.png",
    thumbBg: "https://bootcamp.sheryians.com/DBG.png",
    intro:
      "Your learning journey in this bootcamp is guided by Devendra Dhote is a full‑stack MERN mentor with 4+ years of experience and 35,000+ students trained across projects and live classes.",
  },
  {
    id: "ankur",
    firstName: "Ankur",
    lastName: "Prajapati",
    photo: "https://bootcamp.sheryians.com/APH.png",
    sectionBg: "https://bootcamp.sheryians.com/ABG.png",
    thumbBg: "https://bootcamp.sheryians.com/ABG.png",
    intro:
      "Your learning journey in this bootcamp is guided by Ankur Prajapati specialises in bringing dev fundamentals to life with real‑world examples and crisp, no‑nonsense explanations.",
  },
];

const MentorsSection = () => {
  const [activeId, setActiveId] = useState("harsh");
  const active = mentors.find((m) => m.id === activeId) || mentors[0];

  return (
    <section className="relative overflow-hidden bg-black text-white z-10">
      {/* heading */}
      <div className="px-4 pt-12 text-center md:px-10 lg:px-20">
        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.6rem] font-semibold tracking-tight leading-tight">
          <span className="text-[#B8A5FF]">Learn From Engineers</span>, Not
          Trainers
        </h2>
      </div>

      {/* main mentor area */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-10 pt-10 md:px-10 lg:px-20">
        {/* top + bottom gradients */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[18vh] bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-black to-transparent" />

        {/* background image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.sectionBg}
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url('${active.sectionBg}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
            }}
          />
        </AnimatePresence>

        {/* content row */}
        <div className="relative z-10 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
          {/* left: text */}
          <div className="relative flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "-text"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 md:space-y-6"
              >
                {/* first + last name stacked on mobile, side on desktop */}
                <div className="flex flex-col gap-1 md:gap-2">
                  <h1 className="text-[2.6rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-semibold leading-none">
                    {active.firstName}
                  </h1>
                  <h1 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4rem] lg:text-[4.8rem] font-semibold leading-none text-white/90">
                    {active.lastName}
                  </h1>
                </div>

                <p className="max-w-xl text-sm sm:text-base md:text-[0.95rem] text-white/90">
                  {active.intro}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* right: big photo */}
          <div className="relative flex-1 flex justify-center md:justify-end">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.photo}
                src={active.photo}
                alt={active.firstName}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.45 }}
                className="h-[220px] sm:h-[260px] md:h-[340px] lg:h-[420px] w-auto object-contain"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* thumbnails strip */}
        <div className="relative z-10 mt-4">
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-none">
            {mentors.map((m) => {
              const isActive = m.id === activeId;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveId(m.id)}
                  className={`
                    group relative flex-1 min-w-[120px] max-w-[170px]
                    overflow-hidden rounded-2xl border-4
                    transition-all duration-300
                    ${
                      isActive
                        ? "border-white shadow-[0_0_30px_rgba(0,0,0,0.9)]"
                        : "border-black/80 opacity-70 hover:opacity-100"
                    }
                  `}
                  style={{
                    backgroundImage: `url('${m.thumbBg}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                  }}
                >
                  {/* top badge */}
                  <div className="pointer-events-none flex justify-start px-2 pb-8 pt-2">
                    <img
                      src={LionBadge}
                      alt="Sheryians badge"
                      className="w-14 sm:w-16 md:w-20"
                    />
                  </div>

                  {/* name bottom overlay */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-white/30 backdrop-blur py-1.5 text-center text-[10px] sm:text-xs md:text-sm">
                    <span className="font-medium">
                      {m.firstName} {m.lastName}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
