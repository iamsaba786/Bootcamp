import React, { useState } from "react";
import { motion } from "framer-motion";

const polygonData = [
  {
    title: "Structured",
    desc: "Master every concept with precise guidance that ensures you learn exactly what matters. lorem ipsum dolor sit amet consectetur adipisicing elit lorem .",
  },
  {
    title: "Mentorship",
    desc: "Build real-world projects that let your creativity flow and sharpen your problem-solving lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Community",
    desc: "Experience industry-level practices and polish your skills with expert mentorship lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Competition",
    desc: "Weekly challenges that make you sharper and faster. You don’t just learn — you perform like a real engineer lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet.",
  },
];

const paragraphVariants = {
  inactive: {
    opacity: 0,
    y: -8,
    height: 0,
    marginTop: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  active: {
    opacity: 1,
    y: 0,
    height: "auto",
    marginTop: 12,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const PolygonRow = ({ title, desc, isActive, onActivate }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // mobile pe text ko center me zyada narrow rakhna
  const wrapperWidth = isMobile ? "max-w-[78%]" : "w-4/5 md:w-1/2";
  const textSize =
    "font-sans text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-[#d7d7ff] leading-relaxed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex w-full justify-center"
    >
      <div
        className="w-full max-w-[900px] px-1 py-1 bg-gradient-to-b from-transparent to-[#9685FE]"
        style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 25% 100%)" }}
      >
        <button
          type="button"
          onClick={onActivate}
          onMouseEnter={() => !isMobile && onActivate()}
          className="group flex w-full flex-col items-center justify-start
                     bg-gradient-to-b from-black to-[#1e1e2f]
                     cursor-pointer pt-8 pb-10 md:pt-10 md:pb-14
                     min-h-[190px] md:min-h-[220px] lg:min-h-[240px]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 75.3% 100%, 24.7% 100%)",
          }}
        >
          <h3 className="text-2xl md:text-6xl font-semibold font-sans text-white text-center">
            {title}
          </h3>

          {/* Mobile: always show; Desktop: only when active, animated */}
          {isMobile ? (
            <div className={`mt-2 ${wrapperWidth} text-center`}>
              <p className={textSize}>{desc}</p>
            </div>
          ) : (
            <motion.div
              variants={paragraphVariants}
              animate={isActive ? "active" : "inactive"}
              className={`${wrapperWidth} text-center overflow-hidden`}
            >
              <p className={textSize}>{desc}</p>
            </motion.div>
          )}
        </button>
      </div>
    </motion.div>
  );
};

const WhyThisBootcamp = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full py-16 bg-black text-white flex flex-col items-center">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold font-sans text-center mb-10 px-4">
        Why this <span className="text-[#9685FE]">BootCamp?</span>
      </h2>

      <div className="w-full flex flex-col gap-7 px-4">
        {polygonData.map((item, index) => (
          <PolygonRow
            key={item.title}
            title={item.title}
            desc={item.desc}
            isActive={activeIndex === index}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyThisBootcamp;
