import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BootcampScrollVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [80, -40]);

  return (
    <section
      ref={ref}
      className="relative min-h-[140vh] overflow-hidden font-sans"
    >
      <div
        className="absolute inset-0 bg-doted-dark bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/dark-doted.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="sticky top-0 flex h-screen items-center justify-center">
        <motion.h1
          style={{ opacity, y: translateY }}
          className="text-[14vw] md:text-[9vw] font-bold tracking-[0.08em] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.7)] text-center"
        >
          BOOTCAMP
        </motion.h1>
      </div>
    </section>
  );
};

export default BootcampScrollVideo;
