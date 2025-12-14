import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";

const items = [
  {
    label: "Web Development",
    sections: [
      {
        heading: "Foundations",
        points: [
          "HTML, CSS, modern layouting",
          "JavaScript fundamentals and browser APIs",
        ],
      },
    ],
  },
  {
    label: "Version Control",
    sections: [
      {
        heading: "Git & GitHub",
        points: [
          "Working with branches and pull requests",
          "Handling merge conflicts in real projects",
        ],
      },
    ],
  },
  {
    label: "AI and Generative AI",
    sections: [
      {
        heading: "Generative AI",
        points: [
          "Overview of Generative AI",
          "Building applications with Generative AI",
          "Agentic‑AI applications",
          "Working with multi‑agent systems",
        ],
      },
      {
        heading: "Applications of AI",
        points: [
          "MCP servers",
          "Building apps with Generative AI",
          "LangChain for Generative AI",
          "End‑to‑end real‑world AI workflows",
        ],
      },
    ],
  },
  {
    label: "Cloud & DevOps",
    sections: [
      {
        heading: "Generative AI",
        points: [
          "Overview of Generative AI",
          "Building applications with Generative AI",
          "Agentic‑AI applications",
          "Working with multi‑agent systems",
        ],
      },
      {
        heading: "Applications of AI",
        points: [
          "MCP servers",
          "Building apps with Generative AI",
          "LangChain for Generative AI",
          "End‑to‑end real‑world AI workflows",
        ],
      },
    ],
  },
  {
    label: "System Design",
    sections: [
      {
        heading: "Generative AI",
        points: [
          "Overview of Generative AI",
          "Building applications with Generative AI",
          "Agentic‑AI applications",
          "Working with multi‑agent systems",
        ],
      },
      {
        heading: "Applications of AI",
        points: [
          "MCP servers",
          "Building apps with Generative AI",
          "LangChain for Generative AI",
          "End‑to‑end real‑world AI workflows",
        ],
      },
    ],
  },
  {
    label: "Projects You Will Build",
    sections: [
      {
        heading: "Generative AI",
        points: [
          "Overview of Generative AI",
          "Building applications with Generative AI",
          "Agentic‑AI applications",
          "Working with multi‑agent systems",
        ],
      },
      {
        heading: "Applications of AI",
        points: [
          "MCP servers",
          "Building apps with Generative AI",
          "LangChain for Generative AI",
          "End‑to‑end real‑world AI workflows",
        ],
      },
    ],
  },
];

const WhatYoullStudy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="mx-auto px-5 py-2 md:px-15" data-scroll-section>
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[2.5rem] mt-22 font-semibold tracking-tight text-white md:text-[4.0rem]">
          What You&apos;ll Study
        </h2>
        <p className="mt-2 text-[20px] font-lg text-[#6B6A6B] md:text-[40px]">
          Five Months Of Structured, Practical Engineering.
        </p>
      </div>

      {/* Accordion list */}
      <div className="mt-25 space-y-1 bg-black/40">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.label} className="overflow-hidden">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between px-1 py-4 text-left text-white"
              >
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded bg-[#9685FE]" />
                  <span className="text-2xl md:text-[34px]">{item.label}</span>
                </div>

                <div className="flex items-center gap-2 text-sm md:text-xl font-semibold text-white">
                  <span className="hidden md:inline">
                    {isOpen ? "Collapse" : "Expand"}
                  </span>
                  <LuChevronDown
                    className={`h-4 w-4 md:h-5 md:w-5 transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-10 pb-6 text-[14px] text-[#B8B8C2]"
                  >
                    {item.sections?.map((sec) => (
                      <div key={sec.heading} className="mb-5">
                        <h4 className="mb-2 text-[16px] font-semibold text-white">
                          {sec.heading}
                        </h4>
                        <ul className="space-y-1.5">
                          {sec.points.map((p) => (
                            <li key={p} className="text-[14px]">
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {idx !== items.length - 0 && (
                <div className="mx-6 h-px bg-white/15" />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA button */}
      <div className="mt-10 flex justify-center">
        <button
          className="relative text-white mt-10 inline-block shrink-0 rounded-full border-[0.4px] border-white/20 bg-black/20 px-10 py-3 text-sm md:mb-14 md:text-md"
          style={{
            boxShadow: "rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset",
          }}
        >
          View Complete Syllabus
        </button>
      </div>
    </section>
  );
};

export default WhatYoullStudy;
