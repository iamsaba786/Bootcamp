import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RealExperience = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      className="relative z-0 py-20 md:py-32 md:pt-64 font-sans"
      data-scroll-section
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      {/* mouse-follow gradient glow (only when cursor inside section, desktop) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-0 hidden md:block"
        animate={
          isInside
            ? {
                x: mousePos.x - 160,
                y: mousePos.y - 160,
                opacity: 1,
              }
            : { opacity: 0 }
        }
        transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
        style={{
          width: 320,
          height: 320,
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(150,133,254,0.8) 0%, transparent 70%)",
          filter:
            "drop-shadow(0 0 20px #9685fe40) drop-shadow(0 0 40px #9685fe60)",
        }}
      />

      {/* Heading */}
      <h1 className="font-sans text-left leading-tight font-semibold text-[2.5rem] px-6 md:px-14 md:text-6xl max-md:text-[8vw] text-gray-100">
        Real <span className="text-[#9685fe]">Coding Experience</span>
      </h1>

      <p className="mt-2 px-6 md:px-14 leading-snug text-white/50 font-sans capitalize text-[5vw] md:text-3xl lg:text-4xl">
        Every week you <span className="text-white">build</span> +{" "}
        <span className="text-white">solve</span> +{" "}
        <span className="text-white">present</span> — just like a real tech
        team.
      </p>

      <div className="relative z-10 pt-16">
        {/* main grid */}
        <div className="relative z-10 mx-auto grid w-[90%] grid-cols-2 gap-4 pointer-events-none lg:h-[140vh] lg:grid-cols-3 lg:[grid-template-rows:repeat(8,1fr)] lg:pt-20 font-sans">
          {/* top center card */}
          <div className="pointer-events-auto lg:col-start-2 lg:row-span-2 flex items-center justify-center rounded-xl p-px text-white backdrop-blur-2xl">
            <GlassCard title="MiniHack" />
          </div>

          {/* center video */}
          <div className="pointer-events-auto col-span-2 row-span-2 -order-1 overflow-hidden rounded-xl p-px text-white backdrop-blur-2xl lg:order-none lg:col-span-1 lg:col-start-2 lg:row-span-4 lg:row-start-3">
            <motion.div className="h-full w-full overflow-hidden rounded-xl">
              <video
                className="h-full w-full object-cover"
                autoPlay
                playsInline
                loop
                muted
                src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/handbrake.mp4"
              />
            </motion.div>
          </div>

          {/* bottom center card */}
          <div className="pointer-events-auto lg:col-start-2 lg:row-span-2 lg:row-start-7 flex items-center justify-center rounded-xl p-px text-white backdrop-blur-2xl">
            <GlassCard title="Debug battles" />
          </div>

          {/* left column cards */}
          <div className="pointer-events-auto lg:col-start-1 lg:row-span-2 lg:row-start-3 flex items-center justify-center rounded-xl p-px text-white backdrop-blur-2xl">
            <GlassCard title="Peer Code Reviews" />
          </div>

          <div className="pointer-events-auto lg:col-start-1 lg:row-span-2 lg:row-start-5 flex items-center justify-center rounded-xl p-px text-white backdrop-blur-2xl">
            <GlassCard title="Mock Interviews" />
          </div>

          {/* right column cards */}
          <div className="pointer-events-auto lg:col-start-3 lg:row-span-2 lg:row-start-3 flex items-center justify-center rounded-xl p-px text-white backdrop-blur-2xl">
            <GlassCard title="Tech Masterclasses" />
          </div>

          <div className="pointer-events-auto lg:col-start-3 lg:row-span-2 lg:row-start-5 flex items-center justify-center rounded-xl p-px text-white backdrop-blur-2xl">
            <GlassCard title="Show & Tell Fridays" />
          </div>
        </div>
      </div>
    </section>
  );
};

const GlassCard = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
    className="purpleShadow relative h-[10rem] w-full rounded-xl md:h-full lg:p-0"
  >
    <div className="relative flex h-full w-full items-center rounded-xl bg-[radial-gradient(circle_at_top,#5f4bff26_0%,#05030a_55%,#262140_100%)] px-5 py-5 text-[4.5vw] md:p-10 lg:p-8 md:text-4xl lg:text-3xl leading-snug lg:leading-normal font-sans text-white">
      {title}
    </div>
  </motion.div>
);

export default RealExperience;
