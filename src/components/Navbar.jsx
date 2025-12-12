import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;

      setAtTop(y < 10);

      if (y > lastY && y > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <>
      {/* TOP NAVBAR */}
      <section
        className={`fixed inset-x-0 -top-5 z-50 transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between 
          px-4 pt-4 pb-3 md:px-6 md:pt-6 md:pb-4 
          ${atTop ? "bg-transparent" : "bg-transparent"}`}
        >
          {/* Left logo (mobile pe bigger) */}
          <Link to="/" className="relative p-2 flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="
                h-24 w-24
                sm:h-32 sm:w-32
                md:h-28 md:w-28
              "
            />
          </Link>

          {/* Center nav buttons - sirf md+ pe */}
          <button
            className="
              hidden md:flex
              bg-black/50 text-white 
              gap-4 sm:gap-6 md:gap-10
              text-sm sm:text-base 
              px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2
              rounded-full 
              border border-white/20
            "
            style={{
              boxShadow: "rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset",
            }}
          >
            <span className="hover:text-[#9685FE]">Home</span>
            <span className="hover:text-[#9685FE]">Courses</span>
            <span className="text-[#9685FE]">Bootcamp</span>
          </button>

          {/* Right Request Callback button - sirf md+ pe */}
          <button
            className="relative hidden md:inline-block shrink-0 rounded-full border-[0.4px] border-white/20 bg-black/20 px-10 py-3 text-sm md:text-md text-white"
            style={{
              boxShadow: "rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset",
            }}
          >
            Request Callback
          </button>

          {/* Mobile menu icon (center + right ke jagah) */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden relative -mt-2 inline-flex items-center justify-center p-2 text-white"
          >
            {mobileOpen ? (
              <HiOutlineX className="h-6 w-6" />
            ) : (
              <HiOutlineMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </section>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`fixed inset-x-0 top-14 z-40 px-4 transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-3"
        }`}
      >
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/15 bg-black/80 px-4 py-4 backdrop-blur-lg">
          {/* Center btn items */}
          <div className="flex flex-col gap-2 text-sm text-white">
            <button className="flex justify-start rounded-full bg-white/5 px-4 py-2">
              <span className="hover:text-[#9685FE]">Home</span>
            </button>
            <button className="flex justify-start rounded-full bg-white/5 px-4 py-2">
              <span className="hover:text-[#9685FE]">Courses</span>
            </button>
            <button className="flex justify-start rounded-full bg-white/5 px-4 py-2">
              <span className="text-[#9685FE]">Bootcamp</span>
            </button>
          </div>

          {/* Right button inside menu */}
          <button
            className="mt-4 w-full rounded-full border border-white/20 bg-black/40 px-6 py-3 text-sm text-white"
            style={{
              boxShadow: "rgba(244, 244, 254, 0.25) 0px 4px 8px 0px inset",
            }}
          >
            Request Callback
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
