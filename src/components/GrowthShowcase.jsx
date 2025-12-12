import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const posters = [
  "https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image 588254504.png",
  "https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image 588254505.png",
  "https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image 588254506.png",
  "https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image 588254507.png",
  "https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image 588254508.png",
  "https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image 588254509.png",
  "https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image 588254510.png",
  "https://dfdx9u0psdezh.cloudfront.net/bootcamp/poster/image 588254511.png",
];

const GrowthShowcase = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="pt-10 md:pt-44 md:py-32 font-sans">
      <h1 className="text-center leading-tight text-[8.5vw] md:text-[4.5rem] md:!text-6xl px-10 font-semibold text-white lg:flex justify-center">
        From Self-Doubt →
        <span className="accent text-[#b6a4ff] ml-2">To Self-Confidence</span>
      </h1>

      <p className="text-center capitalize text-white/50 font-sans md:text-3xl lg:text-4xl md:mt-0 mt-1 px-6 md:px-14 leading-snug">
        students growth and achievements.
      </p>

      {/* mobile simple grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 px-4 md:hidden">
        {posters.map((src) => (
          <img
            key={src}
            src={src}
            alt="Student success"
            className="w-full rounded-lg object-cover"
          />
        ))}
      </div>

      {/* scroll-controlled */}
      <div className="hidden md:block md:h-[200vh] lg:h-[400vh] mt-5" ref={ref}>
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {posters.map((src, index) => (
            <PosterSlide
              key={src}
              src={src}
              index={index}
              total={posters.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PosterSlide = ({ src, index, total, progress }) => {
  const step = 1 / total;
  const start = step * index;
  const end = step * (index + 1);

  const opacity = useTransform(
    progress,
    [start, start + step * 0.35, end - step * 0.15, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [60, 0, -60]
  );
  const scale = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [0.95, 1, 0.95]
  );

  const directions = [-60, 60, -50, 50, -40, 40, -30, 30];
  const dir = directions[index % directions.length];
  const x = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [dir, 0, -dir]
  );

  return (
    <motion.div
      className="absolute w-full max-w-[480px]"
      style={{ opacity, y, x, scale }}
      transition={{ ease: [0.22, 0.61, 0.36, 1] }} // 3) smooth cubic-bezier
    >
      <div className="w-full rounded-xl bg-black flex items-center justify-center">
        <img
          src={src}
          alt="Student poster"
          className="w-full h-auto rounded-xl object-contain"
        />
      </div>
    </motion.div>
  );
};

export default GrowthShowcase;
