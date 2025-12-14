import React, { useState, useCallback, memo, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LionBadge from "../assets/lion.svg";

/* ===================== DATA (Kept same) ===================== */
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
      "Your learning journey in this bootcamp is guided by Devendra Dhote is a full-stack MERN mentor with 4+ years of experience and 35,000+ students trained across projects and live classes.",
  },
  {
    id: "ankur",
    firstName: "Ankur",
    lastName: "Prajapati",
    photo: "https://bootcamp.sheryians.com/APH.png",
    sectionBg: "https://bootcamp.sheryians.com/ABG.png",
    thumbBg: "https://bootcamp.sheryians.com/ABG.png",
    intro:
      "Your learning journey in this bootcamp is guided by Ankur Prajapati specialises in bringing dev fundamentals to life with real-world examples and crisp, no-nonsense explanations.",
  },
];

/* ===================== 1. CUSTOM HOOK FOR PRELOADING (The Fix) ===================== */

const usePreloadImage = (urls) => {
  useEffect(() => {
    if (!urls || urls.length === 0) return;

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [urls]);
};

/* ===================== MEMO COMPONENTS ===================== */

const MentorThumbnail = memo(({ mentor, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
                group relative flex-1 min-w-[120px] max-w-[170px]
                overflow-hidden rounded-2xl border-4
                transition-all duration-300
                will-change-transform 
                ${
                  isActive
                    ? "border-white shadow-[0_0_30px_rgba(0,0,0,0.9)]"
                    : "border-black/80 opacity-70 hover:opacity-100"
                }
            `}
      style={{
        backgroundImage: `url('${mentor.thumbBg}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="pointer-events-none flex justify-start px-2 pb-8 pt-2">
        <img src={LionBadge} alt="badge" className="w-14 sm:w-16 md:w-20" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-white/30 backdrop-blur py-1.5 text-center text-[10px] sm:text-xs md:text-sm">
        <span className="font-medium">
          {mentor.firstName} {mentor.lastName}
        </span>
      </div>
    </button>
  );
});

const MentorText = memo(({ mentor }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={mentor.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-4 md:space-y-6"
    >
      <div className="flex flex-col gap-1 md:gap-2">
        <h1 className="text-[2.6rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-semibold leading-none">
          {mentor.firstName}
        </h1>
        <h1 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4rem] lg:text-[4.8rem] font-semibold leading-none text-white/90">
          {mentor.lastName}
        </h1>
      </div>

      <p className="max-w-xl text-sm sm:text-base md:text-[0.95rem] text-white/90">
        {mentor.intro}
      </p>
    </motion.div>
  </AnimatePresence>
));

const MentorImage = memo(({ mentor }) => (
  <AnimatePresence mode="wait">
    <motion.img
      key={mentor.photo}
      src={mentor.photo}
      alt={mentor.firstName}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.45 }}
      className="h-[220px] sm:h-[260px] md:h-[340px] lg:h-[420px] w-auto object-contain"
    />
  </AnimatePresence>
));

/* ===================== MAIN SECTION (Updated with Preloading) ===================== */

const MentorsSection = () => {
  const [activeId, setActiveId] = useState("harsh");

  const active = mentors.find((mentor) => mentor.id === activeId) || mentors[0];

  const handleSelect = useCallback((id) => {
    setActiveId(id);
  }, []);

  const imageURLs = useMemo(
    () => mentors.flatMap((m) => [m.thumbBg, m.sectionBg]),
    []
  );

  usePreloadImage(imageURLs);

  return (
    <section className="relative overflow-hidden bg-black text-white z-10">
      {/* heading */}
      <div className="px-4 pt-12 text-center md:px-10 lg:px-20">
        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.6rem] font-semibold tracking-tight leading-tight">
          <span className="text-[#B8A5FF]">Learn From Engineers</span>, Not
          Trainers
        </h2>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 md:px-10 lg:px-20">
        {/* gradients */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[18vh] bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-black to-transparent" />

        {/* background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.sectionBg}
            className="pointer-events-none absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              // When you click, the image is already in the cache! Smooth AF.
              backgroundImage: `url('${active.sectionBg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
        </AnimatePresence>

        {/* content */}
        <div className="relative z-10 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <MentorText mentor={active} />
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <MentorImage mentor={active} />
          </div>
        </div>

        {/* thumbnails */}
        <div className="relative z-10 mt-6 flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-none">
          {mentors.map((mentor) => (
            <MentorThumbnail
              key={mentor.id}
              mentor={mentor}
              isActive={mentor.id === activeId}
              onClick={() => handleSelect(mentor.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
