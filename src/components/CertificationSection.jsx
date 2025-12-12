import React, { useRef } from "react";

const CERT_URL =
  "https://dfdx9u0psdezh.cloudfront.net/bootcamp/certificateKodr.jpg";

const CertificateSection = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // inside x
    const y = e.clientY - rect.top; // inside y

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -8; // tilt up/down
    const rotateY = ((x - midX) / midX) * 8; // tilt left/right

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="relative overflow-hidden py-20 text-center text-white z-10">
      {/* heading */}
      <h1 className="font-[bwGrad-m] leading-tight text-[2.5rem] px-5 md:px-0 md:text-[4.5rem] max-md:text-[10vw]">
        Bootcamp <span className="text-[#B8A5FF] inline">Certification</span>
      </h1>

      {/* marquee + main card wrapper */}
      <div className="relative z-0 mt-10 flex flex-col items-center justify-center gap-4 py-28">
        {/* top marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex cert-marquee-left gap-6 py-5 h-[20vh] md:h-[30vh]">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                src={CERT_URL}
                alt=""
                className="h-full rounded blur-md"
              />
            ))}
          </div>
        </div>

        {/* bottom marquee (reverse) */}
        <div className="w-full overflow-hidden">
          <div className="flex cert-marquee-right gap-6 py-5 h-[20vh] md:h-[30vh]">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                src={CERT_URL}
                alt=""
                className="h-full rounded blur-md"
              />
            ))}
          </div>
        </div>

        {/* center 3D card */}
        <div className="pointer-events-none absolute w-[90%] md:w-[65%] perspective-[1000px]">
          <div
            ref={cardRef}
            className="pointer-events-auto mx-auto overflow-hidden rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.9)] transition-transform duration-300 will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={CERT_URL}
              alt="Bootcamp Certificate"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
