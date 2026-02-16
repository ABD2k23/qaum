import Image from "next/image";
import ElectricBorder from "./ElectricBorder";
// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const features = [
    {
      title: "Learn",
      p1: "Discover 16 countries with fun facts!",
      p2: "Grab lasting insights.",
      p3: "Enjoy a quick dive into diverse cultures!",
      img: "/1ill/earth-ill.png",
      tone: "red",
    },
    {
      title: "Play",
      p1: "Challenge yourself with fun quizzes!",
      p2: "Enjoy 5 exciting levels! ",
      p3: "Test your smarts and have a blast!",
      img: "/1ill/play-ill.png",
      tone: "blue",
    },
    {
      title: "Grow",
      p1: "Collect fun badges!",
      p2: "Race up the leaderboard! ",
      p3: "Show off your achievements!",
      img: "/1ill/plant-ill.png",
      tone: "green",
    },
  ];

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".features-move",
  //       start: "20% 80%",
  //       end: "20% 40%",
  //       scrub: 1,
  //     },
  //   });
  //   tl.to(".movi", {
  //     y: "200%",
  //     duration: 1,
  //     stagger: 0.1,
  //     ease: "power1.out",
  //   }).fromTo(
  //     ".cards",
  //     { opacity: 1, scale: 0.96 },
  //     { opacity: 1, scale: 1, duration: 1, stagger: 0.4, ease: "power1.out" },
  //   );
  // }, []);

  return (
    <div className="features-move bg-back-red flex w-full flex-col items-center justify-center overflow-x-clip pb-[96px]">
      <ElectricBorder color="#b33c46" speed={0.2} chaos={0.1} thickness={1}>
        <div className="w-screen"></div>
      </ElectricBorder>
      <div className="relative mt-[96px] mb-[128px] overflow-clip">
        {/* <div className="movi squircle bg-low-red absolute inset-0 z-3 w-full rounded-[16px]"></div>
        <div className="movi squircle bg-low-blue absolute inset-0 z-2 w-full rounded-[16px]"></div>
        <div className="movi squircle bg-low-green absolute inset-0 z-1 w-full rounded-[16px]"></div> */}
        <h2 className="features-title text-center">Features</h2>
      </div>
      <div className="cards flex w-full items-center justify-between px-[64px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group squircle relative flex cursor-crosshair flex-col items-start justify-center gap-4 rounded-[16px] p-[32px] ${
              feature.tone === "red"
                ? "bg-light-red border-low-red border"
                : feature.tone === "blue"
                  ? "bg-light-blue border-low-blue border"
                  : "bg-light-green border-low-green border"
            }`}
          >
            {/* <div
              className={`squircle absolute inset-0 -z-10 rounded-[32px] transition-all duration-200 group-hover:scale-105 ${
                feature.tone === "red"
                  ? "bg-light-red border-low-red border"
                  : feature.tone === "blue"
                    ? "bg-light-blue border-low-blue border"
                    : "bg-light-green border-low-green border"
              }`}
            ></div> */}
            <h4>{feature.title}</h4>
            <svg
              // className="origin-left transition-all duration-200 group-hover:scale-x-75"
              width="356"
              height="2"
              viewBox="0 0 356 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1H356"
                stroke={
                  feature.tone === "red"
                    ? "#e3abb0"
                    : feature.tone === "blue"
                      ? "#a0b2ee"
                      : "#c0eaa4"
                }
                strokeWidth="2"
              />
            </svg>
            <p>
              1. {feature.p1}
              <br />
              2. {feature.p2}
              <br />
              3. {feature.p3}
            </p>

            <Image
              className="absolute -top-[64px] right-[32px] transition-all duration-200 group-hover:scale-95"
              src={feature.img}
              alt="feature"
              width={128}
              height={128}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
