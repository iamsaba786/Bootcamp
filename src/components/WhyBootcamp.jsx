import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PolygonRow = ({ title, desc, isActive, onActivate }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

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
        style={{
          clipPath: "polygon(0 0, 100% 0, 75% 100%, 25% 100%)",
        }}
      >
        <button
          type="button"
          onClick={onActivate}
          onMouseEnter={onActivate}
          className="group flex w-full flex-col items-center justify-end 
            bg-gradient-to-b from-black to-[#1e1e2f]
            cursor-pointer pt-8 pb-10 md:pt-10 md:pb-16
            min-h-[180px] md:min-h-[230px] lg:min-h-[260px]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 75.3% 100%, 24.7% 100%)",
          }}
        >
          <h3 className="text-2xl md:text-5xl lg:text-6xl font-[bwGrad-m] text-white text-center">
            {title}
          </h3>

          {/* Paragraph */}
          <AnimatePresence initial={false}>
            {(isActive || isMobile) && (
              <motion.div
                key="para"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mt-3 md:mt-4 w-4/5 md:w-1/2 text-center overflow-hidden"
              >
                <p className="font-[bwGrad-l] text-[11px] md:text-xs lg:text-sm text-[#d7d7ff] leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
};

const WhyThisBootcamp = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const polygonData = [
    {
      title: "Structured",
      desc: "Master every concept with precise guidance that ensures you learn exactly what matters.",
    },
    {
      title: "Creative",
      desc: "Build real-world projects that let your creativity flow and sharpen your problem-solving.",
    },
    {
      title: "Professional",
      desc: "Experience industry-level practices and polish your skills with expert mentorship.",
    },
  ];

  return (
    <section className="w-full py-20 bg-black text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-[bwGrad-m] text-center mb-10">
        What's New?
      </h2>
      <p className="tracking-wide text-gray-300 text-center mb-14">
        What Makes This Bootcamp Better Than The Rest?
      </p>

      <div className="w-full flex flex-col gap-7">
        {polygonData.map((item, index) => (
          <PolygonRow
            key={index}
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
