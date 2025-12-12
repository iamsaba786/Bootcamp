import React from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi2";

const Syllabus = () => {
  return (
    <section
      className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20"
      data-scroll-section
    >
      {/* Proven Results block */}
      <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-2 md:items-center">
        {/* Left big heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex items-start justify-center md:justify-start"
        >
          <div className="text-center md:text-left">
            <h2 className="text-[2.8rem] leading-none text-white sm:text-[3.2rem] md:text-[5.2rem] lg:text-[5.6rem]">
              Proven
            </h2>
            <h2 className="mt-3 text-[2.8rem] leading-none text-[#7A7A7F] sm:text-[3.2rem] md:text-[5.2rem] lg:text-[5.6rem]">
              Results
            </h2>
          </div>
        </motion.div>

        {/* Right copy + stats */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex flex-col justify-center text-sm text-[#807F80]"
        >
          <p className="mb-6 max-w-xl self-center text-center text-[18px] leading-tight sm:text-[20px] md:mb-8 md:self-end md:text-right md:text-[22px]">
            The World Needs Better Engineers
            <br />
            And We&apos;re Helping Students Reach
            <br />
            Where Opportunity Lives.
          </p>

          <div className="flex flex-wrap items-end justify-center gap-6 text-[1.7rem] font-semibold text-white sm:gap-8 sm:text-[1.9rem] md:justify-end md:text-[2.4rem] lg:text-[2.9rem]">
            <div className="space-y-1 text-center md:text-right">
              <div>607k+</div>
              <p className="flex items-center justify-center gap-2 text-[13px] font-normal text-[#8C8C90] sm:text-[14px] md:justify-end md:text-[15px]">
                <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Subscribers</span>
              </p>
            </div>

            <div className="space-y-1 text-center md:text-right">
              <div>250k+</div>
              <p className="flex items-center justify-center gap-2 text-[13px] font-normal text-[#8C8C90] sm:text-[14px] md:justify-end md:text-[15px]">
                <PiStudentFill className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Students</span>
              </p>
            </div>

            <div className="space-y-1 text-center md:text-right">
              <div>20+</div>
              <p className="flex items-center justify-center gap-2 text-[13px] font-normal text-[#8C8C90] sm:text-[14px] md:justify-end md:text-[15px]">
                <HiUserGroup className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Instructors</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Syllabus;
