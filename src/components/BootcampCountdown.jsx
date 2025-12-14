import React, { useEffect, useState, memo } from "react";

const BootcampCountdown = () => {
  const targetDate = new Date("2025-12-31T18:00:00+05:30").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-black pt-10 pb-14 text-white md:pb-24">
      {/* heading */}
      <h1 className="font-[bwGrad-m] px-5 text-center leading-tight text-[2.1rem] max-sm:text-[8vw] md:px-0 md:text-[3.4rem] lg:text-[4.2rem] md:mb-4">
        Bootcamp
        <span className="text-[#B8A5FF]"> Start From</span>
      </h1>

      {/* timer container */}
      <div className="mx-auto mt-[clamp(1rem,4vw,3rem)] flex flex-wrap items-center justify-center gap-[clamp(10px,3.5vw,36px)] px-[2vw]">
        <TimeBlock number={days} label="Days" />
        <Colon />
        <TimeBlock number={hours} label="Hours" />
        <Colon />
        <TimeBlock number={minutes} label="Minutes" />
        <Colon />
        <TimeBlock number={seconds} label="Seconds" />
      </div>

      {/* button */}
      <button
        className="relative mt-8 inline-block shrink-0 rounded-full border-[0.4px] border-white/20 bg-black/20 px-8 py-2.5 text-xs sm:text-sm md:text-base md:mb-10"
        style={{ boxShadow: "rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset" }}
      >
        Join Now
      </button>
    </section>
  );
};

const TimeBlock = memo(({ number, label }) => (
  <div className="flex min-w-[4.2rem] flex-col items-center text-center max-sm:min-w-[3.6rem]">
    <div
      className="mb-1.5 font-[bwGrad-r] font-black text-white leading-none
      [font-size:clamp(36px,8vw,80px)]
      sm:[font-size:clamp(44px,7vw,96px)]
      [text-shadow:0_0_20px_rgba(255,255,255,0.3)]
      transition-transform duration-200"
    >
      {String(number).padStart(2, "0")}
    </div>
    <div
      className="text-[#888] font-medium tracking-[2px] uppercase
      [font-size:clamp(10px,2.5vw,14px)]
      sm:[font-size:clamp(11px,1.5vw,16px)]"
    >
      {label}
    </div>
  </div>
));

const Colon = memo(() => (
  <div
    className="mx-[8px] font-light text-white
    [font-size:clamp(20px,6vw,40px)]
    sm:[font-size:clamp(24px,4.5vw,56px)]
    max-sm:mx-[4px]"
  >
    :
  </div>
));

// helper
function getTimeLeft(target) {
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default BootcampCountdown;
