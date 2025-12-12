import React from "react";

const IntroVideo = () => {
  return (
    <section
      className="mx-auto mt-24 flex max-w-5xl flex-col items-center px-4 pb-20 md:px-6"
      data-scroll-section
    >
      {/* Video frame */}
      <div className="w-full overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_32px_90px_rgba(0,0,0,0.8)]">
        <iframe
          className="h-[260px] w-full md:h-[430px]"
          src="https://www.youtube.com/embed/UW0sJW5XndI"
          title="Sheryians Bootcamp | Kodex and Kodr | explanation video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Heading under video */}
      <h2 className="mt-10 text-center text-[1.6rem] font-semibold text-white md:text-[1.9rem]">
        A Journey That Builds{" "}
        <span className="bg-gradient-to-r from-[#9685FE] to-[#9685FE] bg-clip-text text-transparent">
          Skills
        </span>{" "}
        And{" "}
        <span className="bg-gradient-to-r from-[#9685FE] to-[#9685FE] bg-clip-text text-transparent">
          Real Confidence.
        </span>
      </h2>

      {/* Glassy Request Callback button */}
      <button
        className="relative text-white mt-10 inline-block shrink-0 rounded-full border-[0.4px] border-white/20 bg-black/20 px-10 py-3 text-sm md:mb-14 md:text-md"
        style={{
          boxShadow: "rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset",
        }}
      >
        Request Callback
      </button>
    </section>
  );
};

export default IntroVideo;
