"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-move",
      { translateY: "200px" },
      { delay: 5.5, translateY: "0px", ease: "power1.out", opacity: 1 },
    );
  }, []);

  return (
    <>
      <div className="hero-move w-full overflow-hidden">
        <Navbar />
        <div className="relative flex flex-col items-center justify-center gap-[160px] overflow-hidden pt-[160px] pb-[96px]">
          <Image
            className="squircle absolute top-96 left-8 cursor-crosshair rounded-2xl transition-all duration-200 hover:scale-95 hover:blur-[1px]"
            src="/images/countries/China1.webp"
            alt="hero"
            width={200}
            height={120}
            priority
          />
          <Image
            className="squircle absolute top-16 -left-8 cursor-crosshair rounded-2xl transition-all duration-200 hover:scale-95 hover:blur-[1px]"
            src="/images/countries/UnitedStates2.webp"
            alt="hero"
            width={200}
            height={120}
            priority
          />
          <Image
            className="squircle absolute top-16 right-8 cursor-crosshair rounded-2xl transition-all duration-200 hover:scale-95 hover:blur-[1px]"
            src="/images/countries/Russia3.webp"
            alt="hero"
            width={200}
            height={120}
            priority
          />
          <Image
            className="squircle absolute top-96 -right-8 cursor-crosshair rounded-2xl transition-all duration-200 hover:scale-95 hover:blur-[1px]"
            src="/images/countries/SaudiArabia2.webp"
            alt="hero"
            width={200}
            height={120}
            priority
          />
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-center">
              A Playful Way To Learn <br /> About The World!
            </h1>
            <div className="border-red squircle flex w-[384px] items-center justify-center gap-2 rounded-2xl border-2 px-4 py-2 shadow-[0_4px_0_#a0b2ee,0_8px_0_#c0eaa4] transition-all duration-200 focus-within:shadow-[0_0px_0_#a0b2ee,0_0px_0_#c0eaa4]">
              <input
                className="link placeholder:text-light-black w-full outline-none"
                type="text"
                placeholder="Search by country name"
              />
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 11.6066C-0.0976311 11.9971 -0.0976311 12.6303 0.292893 13.0208C0.683418 13.4114 1.31658 13.4114 1.70711 13.0208L1 12.3137L0.292893 11.6066ZM13.3137 1.00001C13.3137 0.447727 12.866 1.2137e-05 12.3137 1.18841e-05L3.31371 1.26849e-05C2.76142 1.23477e-05 2.31371 0.447728 2.31371 1.00001C2.31371 1.5523 2.76142 2.00001 3.31371 2.00001L11.3137 2.00001L11.3137 10C11.3137 10.5523 11.7614 11 12.3137 11C12.866 11 13.3137 10.5523 13.3137 10L13.3137 1.00001ZM1 12.3137L1.70711 13.0208L13.0208 1.70712L12.3137 1.00001L11.6066 0.292906L0.292893 11.6066L1 12.3137Z"
                  fill="#0F1913"
                  fillOpacity="0.32"
                />
              </svg>
            </div>
          </div>
          <p className="w-full max-w-[328px] text-center">
            Dive into a fun world of global info, quizzes, and an exciting
            leaderboard!
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
