import React from "react";
import Kodex from "../assets/kodex.svg";
import Kodr from "../assets/kodr.svg";

const ChooseYourStyle = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-12 text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-[2.4rem] md:text-[4rem] font-semibold tracking-tight">
          Choose Your Style
        </h2>
        <p className="mt-3 text-sm md:text-2xl tracking-tight text-white/60">
          Same Transformation.{" "}
          <span className="text-[#B8A5FF]">Two ways To Learn</span>
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 font-semibold gap-10 md:grid-cols-2 place-items-center">
        <StyleCard
          title="Online BootCamp"
          subtitle="An exclusive online bootcamp by Sheryians."
          logo={Kodex}
          variant="left"
        />
        <StyleCard
          title="Offline BootCamp"
          subtitle="Sheryians offline bootcamp where you learn."
          logo={Kodr}
          variant="right"
        />
      </div>
    </section>
  );
};

const StyleCard = ({ title, subtitle, logo, variant }) => {
  return (
    <button
      className={`
        group relative 
        w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px]
        overflow-hidden rounded-xl
        border border-[#5f4bff44]
        bg-[#05040b] 
        flex flex-col items-center justify-center
        shadow-[0_40px_160px_rgba(0,0,0,0.95)]
        px-6 py-10 z-10
      `}
    >
      {/* grainy background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.75] mix-blend-screen"
        style={{
          backgroundImage:
            "url('https://bootcamp.sheryians.com/Grainy Background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* radial glow */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-70 blur-[2px]
        ${
          variant === "left"
            ? "bg-[radial-gradient(circle_at_top_right,#000,transparent_60%)]"
            : "bg-[radial-gradient(circle_at_top_left,#000,transparent_60%)]"
        }`}
      />

      {/* Logo */}
      <div className="relative z-10 mb-10 flex items-center justify-center">
        <img src={logo} alt={`${title} logo`} className="h-20 md:h-28 w-auto" />
      </div>

      {/* Bottom text */}
      <div className="relative z-10 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h3>
        <p className="text-xs md:text-sm text-white/70 max-w-xs mx-auto">
          {subtitle}
        </p>
      </div>
    </button>
  );
};

export default ChooseYourStyle;
