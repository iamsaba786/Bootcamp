import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 pt-34 pb-16 md:px-6"
      data-scroll-section
    >
      {/* Background video arc (center only) */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="relative mt-[-80px] h-[420px] w-[900px] max-w-full overflow-hidden rounded-b-[320px] rounded-t-[0px]">
          <video
            className="h-full w-full object-cover opacity-65 scale-[1.2]"
            src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* side fade so corners dark ho jayein */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_80%)]" />
        </div>
      </div>

      {/* Optional soft glow on top of video */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[5%] h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,#3f37ff_0%,transparent_60%)] opacity-15 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        {/* Top pill stats */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-1 inline-flex items-center gap-2 rounded-full bg-black/40 px-6 py-2 text-[13px] font-medium text-gray-200 shadow-[0_18px_60px_rgba(0,0,0,0.85)]"
        >
          <span className="text-[#8A6BFF]">1000+</span>
          <span>happy students in the program</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[2.8rem] font-semibold leading-tight tracking-tight text-white md:text-[3.8rem]"
        >
          The Builders&apos; League
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-2 text-[1.9rem] font-medium leading-tight text-gray-100 md:text-[2.3rem]"
        >
          <span className="text-white">Sheryians&nbsp;</span>
          <span className="bg-gradient-to-r from-[#9685FE] via-[#9685FE] to-[#9685FE] bg-clip-text text-transparent">
            Bootcamp
          </span>
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-[#6B6A6B] md:text-base"
        >
          5‑month premium engineering journey that turns ambitious learners into
          confident builders — through structure, challenge and community.
        </motion.p>

        {/* CTA button */}
        <button
          className="relative text-white mt-10 inline-block shrink-0 rounded-full border-[0.4px] border-white/20 bg-black/20 px-10 py-3 text-sm md:mb-14 md:text-lg"
          style={{
            boxShadow: "rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset",
          }}
        >
          Fill The Form
        </button>
      </div>
    </section>
  );
};

export default Hero;
