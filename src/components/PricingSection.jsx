// PricingSection.jsx
import React from "react";

const PricingSection = () => {
  return (
    <section className="mt-10 md:mt-32 w-full overflow-hidden relative z-10 pb-20">
      {/* Simple Pricing heading */}
      <h1 className="font-[bwGrad-m] text-center leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem]">
        <span
          className="
            bg-gradient-to-b from-gray-400 from-50% to-black
            bg-clip-text text-transparent
            text-[13vw] md:text-9xl
          "
        >
          Simple Pricing
        </span>
      </h1>

      {/* cards wrapper */}
      <div className="lg:w-3/4 w-[90%] text-gray-100 relative mx-auto flex flex-col lg:flex-row justify-center z-0 gap-10 mt-10">
        <PriceCard
          badge="KODEX"
          title="Online Bootcamp"
          price="₹29,500"
          subPrice="(25,000 + 18% GST)"
          description={
            <>
              <span className="text-white/50 font-[bwGrad-l]">Build</span>{" "}
              real-world projects, master core technologies,{" "}
              <span className="text-white/50 font-[bwGrad-l]">and</span> become
              industry-ready{" "}
              <span className="text-white/50 font-[bwGrad-l]">projects.</span>
            </>
          }
          items={[
            "One-on-One Challenges",
            "Exclusive Tech Masterclasses",
            "High-Intensity Debug Battles",
            "Weekly Mini Hack Sprints",
            "Live Doubt Solving Sessions",
            "Peer Code Reviews",
            "Offline 2-Day Hackathon Finale",
          ]}
          delivery="180Hrs"
          reverse={false}
        />

        <PriceCard
          badge="KODR"
          title="Offline Bootcamp"
          price="₹59,000"
          subPrice="(50,000 + 18% GST)"
          description={
            <>
              <span className="text-white/50 font-[bwGrad-l]">Learn in a</span>{" "}
              real tech environment with mentors, teams, live competitions,
              <span className="text-white/50 font-[bwGrad-l]"> and a</span>{" "}
              physical space built{" "}
              <span className="text-white/50 font-[bwGrad-l]">
                {" "}
                for builders.
              </span>
            </>
          }
          items={[
            "In-Person Team Challenges",
            "Daily Classroom Sessions",
            "On-Campus Tech Masterclasses",
            "Real-Time Mentor Support",
            "High-Energy Debug Battles (Offline Arena)",
            "Offline Mini Hack Sprints",
            "Leadership & Presentation Drills",
          ]}
          delivery="250Hrs"
          reverse
        />
      </div>

      {/* big purple glow behind cards */}
      <div
        className="w-full aspect-square rounded-full absolute top-[60%] shadow-[0_0_150px_20px_#7733d4] blur-lg z-[-1]"
        style={{
          background:
            "radial-gradient(rgb(107, 96, 164) 50%, rgb(119, 51, 212))",
        }}
      />
    </section>
  );
};

const PriceCard = ({
  badge,
  title,
  price,
  subPrice,
  description,
  items,
  delivery,
  reverse = false,
}) => {
  return (
    <div className="lg:w-[45%] relative overflow-hidden rounded-xl bg-black p-10 md:p-20 z-0">
      {/* circular video glows */}
      <div
        className={`h-full w-full absolute left-0 top-0 -z-10 transform-gpu transition-transform duration-700 ${
          reverse ? "rotate-x-180" : ""
        }`}
      >
        <div className="w-full aspect-square rounded-full absolute left-[30%] top-1/2 overflow-hidden">
          <div
            className="absolute z-10 h-full w-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 70%)",
            }}
          />
          <video
            className="h-full w-full object-cover"
            src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="w-full aspect-square rounded-full absolute right-1/2 md:bottom-[30%] overflow-hidden opacity-80">
          <div
            className="absolute z-10 h-full w-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0) 0%, black 70%)",
            }}
          />
          <video
            className="h-full w-full object-cover"
            src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* badge */}
      <div className="absolute right-5 top-5 w-max rounded-full bg-gradient-to-b from-gray-600 to-black px-4 py-1 text-sm">
        {badge}
      </div>

      {/* main text */}
      <h1 className="text-2xl md:text-4xl font-[bwGrad-l]">{title}</h1>
      <p className="mt-4 text-sm md:text-base font-[bwGrad-m]">{description}</p>

      {/* price */}
      <div className="mt-5 flex items-baseline gap-2 text-xs font-[bwGrad-m] text-white/50">
        <h1 className="text-4xl md:text-5xl font-[bwGrad-r] text-white">
          {price}
        </h1>
        {subPrice}
      </div>

      {/* features */}
      <div className="my-4 border-y border-white/10 py-5 md:py-10">
        <h1 className="mb-3 text-sm font-[bwGrad-l] text-white/80">
          What's Included
        </h1>
        <ul className="space-y-3 text-sm font-[bwGrad-l]">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-4 text-white/80">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 md:mt-10 flex justify-between">
          <h1 className="mb-3 text-sm font-[bwGrad-l]">Delivery Time</h1>
          <h1 className="mb-3 text-sm font-[bwGrad-l]">{delivery}</h1>
        </div>
      </div>

      {/* CTA pill */}
      <button className="flex items-center justify-between rounded-full bg-white px-5 pr-2 py-2 text-black font-[bwGrad-m] text-sm cursor-pointer">
        <span>Get a Call Back</span>
        <div className="flex aspect-square w-10 items-center justify-center rounded-full bg-black text-white">
          →
        </div>
      </button>
    </div>
  );
};

const CheckIcon = () => (
  <svg
    height="20"
    className="mt-1 shrink-0"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 14.9994C0 6.71545 6.71545 0 14.9994 0C23.2833 0 29.9988 6.71545 29.9988 14.9994C29.9988 23.2833 23.2833 29.9988 14.9994 29.9988C6.71545 29.9988 0 23.2833 0 14.9994Z"
      fill="white"
    />
    <path
      d="M20.9995 10.498L12.7498 18.7477L9 14.9979"
      stroke="black"
      strokeWidth="2.24991"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PricingSection;
