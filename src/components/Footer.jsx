import React from "react";
import shery from "../assets/shery.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 py-12 pb-0 md:mt-20 px-6 md:px-14 w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* left side */}
        <div>
          <div className="logo" aria-hidden="true">
            <img src={shery} alt="Sheryians Coding School" className="h-14" />
          </div>

          <div className="mt-7 flex items-center gap-3">
            <SocialIcon
              href="https://www.instagram.com/sheryians_coding_school"
              icon="ri-instagram-line"
            />
            <SocialIcon
              href="https://in.linkedin.com/company/the-sheryians-coding-school"
              icon="ri-linkedin-fill"
            />
            <SocialIcon
              href="https://discord.com/invite/D23JkFqrgz"
              icon="ri-discord-fill"
            />
            <SocialIcon
              href="https://www.youtube.com/@sheryians"
              icon="ri-youtube-fill"
            />
            <SocialIcon
              href="https://x.com/sheryians_"
              icon="ri-twitter-fill"
            />
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-col font-sans md:flex-row md:flex-wrap lg:flex-nowrap md:justify-around gap-14">
          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.sheryians.com/aboutUs"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/D23JkFqrgz"
                  className="text-gray-300 hover:text-white transition"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://www.sheryians.com/hireFromUs"
                  className="text-gray-300 hover:text-white transition"
                >
                  Hire From Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.sheryians.com/projects"
                  className="text-gray-300 hover:text-white transition"
                >
                  Submit Project
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-4 text-lg font-semibold font-sans">Address</h3>
            <div className="space-y-1 text-sm text-gray-300">
              <p>23-B, Indrapuri Sector C,</p>
              <p>Bhopal(MP), 462021</p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-lg font-semibold font-sans">Product</h3>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <a
                  href="https://www.sheryians.com/terms-and-conditions/Terms_and_Conditions.pdf"
                  className="text-gray-300 hover:text-white transition"
                >
                  Term &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.sheryians.com/Assets/privacy-policy/Privacy_policy.pdf"
                  className="text-gray-300 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.sheryians.com/Pricing&Refund-Policy/Pricing-and-Refund_policy.pdf"
                  className="text-gray-300 hover:text-white transition"
                >
                  Pricing and Refund
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold font-sans">Support</h3>
            <ul className="space-y-3 text-sm font-sans text-gray-300">
              <li>Online: 11am - 8pm</li>
              <li>+91 9993478545</li>
              <li>Offline: 11am - 8pm</li>
              <li>+91 9691778470</li>
              <li>
                <a
                  href="mailto:hello@sheryians.com"
                  className="hover:text-white transition"
                >
                  hello@sheryians.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom video glow */}
      <div className="relative z-0 mt-10 flex h-[15vh] items-end overflow-hidden md:h-[30vh] lg:h-[30vh]">
        <div className="absolute z-[-1] aspect-video w-[150vw] max-md:top-[-40%] max-md:left-[-30%] rounded-full overflow-hidden md:top-0 md:w-full">
          <div
            className="absolute z-10 h-full w-full"
            style={{
              background: "radial-gradient(transparent, rgb(0,0,0) 80%)",
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
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex h-8 w-8 items-center justify-center rounded bg-white/10 text-sm text-gray-100 transition hover:bg-white/20"
  >
    <i className={icon} />
  </a>
);

export default Footer;
