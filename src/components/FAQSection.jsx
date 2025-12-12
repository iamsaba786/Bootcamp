import React, { useState } from "react";

const faqs = [
  {
    question: "Are there any projects in this course?",
    answer:
      "Yes, this course includes multiple AI‑focused projects, which will be covered progressively. Detailed information can be found in the syllabus section above.",
  },
  {
    question: "Is the course live?",
    answer:
      "Yes, every session is live and interactive. You’ll be learning directly from mentors in real time so you can ask questions, get feedback, and understand what you’re building instead of just following blindly.",
  },
  {
    question: "How long will I have access to this course?",
    answer:
      "You’ll get access to all content and recordings for 2 years after enrollment, so you can revisit lessons, revise concepts, and rewatch sessions at your own pace.",
  },
  {
    question: "What projects will I work on during the course?",
    answer:
      "You’ll build real, portfolio‑ready work like dynamic websites, REST APIs, real‑time apps, and tools with modern integrations so your projects stand out in interviews.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "Every live session is recorded and uploaded after class, so you can watch the recordings anytime and never miss out even if you skip a day.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 md:px-14 py-20">
      <h1 className="text-left font-semibold text-gray-100 leading-tight text-[2.5rem] px-0 md:text-[4.5rem]">
        Frequently{" "}
        <span className="accent text-[#9685FE]">Asked Questions</span>
      </h1>

      <div className="mt-10">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.question}
              className="border-b border-white/20 py-5 cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
            >
              <h2 className="flex items-center justify-between text-2xl md:text-3xl font-[bwGrad-m] text-white transition-colors duration-300">
                <span className={isOpen ? "text-accent" : ""}>
                  {item.question}
                </span>
                <span className="text-xl md:text-2xl">
                  {isOpen ? "−" : "+"}
                </span>
              </h2>

              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
                `}
              >
                <p className="text-lg font-[bwGrad-l] text-white/70 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
