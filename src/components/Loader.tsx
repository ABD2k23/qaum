"use client";
import { useEffect } from "react";
import gsap from "gsap";
export default function Loader() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const tl = gsap.timeline({
      defaults: { duration: 1 },
      onComplete: () => {
        gsap.to(".container", {
          scaleY: 0,
          ease: "sine.in",
          stagger: 0.05,
          onComplete: () => {
            gsap.set(".container", { display: "none" });
            document.body.style.overflow = "auto";
          },
        });
      },
    });
    tl.to(".move", {
      y: 32,
      stagger: 0.1,
      ease: "expo.out",
    })
      .to(".move", {
        y: -32,
        stagger: 0.1,
        ease: "expo.out",
      })
      .to(".move", {
        y: -96,
        stagger: 0.1,
        ease: "expo.out",
      })
      .to(".move", {
        y: -224,
        stagger: 0.1,
        ease: "expo.out",
      });
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      {/* bgs */}
      <div className="squircle fixed top-0 left-0 z-50 container flex h-full w-screen origin-top items-center justify-center bg-black">
        {/* bs */}
        <div className="flex h-[64px] flex-col items-center justify-center gap-0 overflow-hidden">
          <h3 className="squircle move h-[64px] translate-y-[96px] rounded-[24px] p-4 py-3 text-xl font-bold text-white">
            Qaumly
          </h3>
          <h3 className="bg-low-red squircle move h-[64px] translate-y-[100px] rounded-[24px] p-4 py-3 text-xl font-bold text-black">
            Learn
          </h3>
          <h3 className="bg-low-blue squircle move h-[64px] translate-y-[100px] rounded-[24px] p-4 py-3 text-xl font-bold text-black">
            Play
          </h3>
          <h3 className="bg-low-green squircle move h-[64px] translate-y-[100px] rounded-[24px] p-4 py-3 text-xl font-bold text-black">
            Grow
          </h3>
        </div>
      </div>
      <div className="bg-low-red absolute inset-0 z-12 container origin-top"></div>
      <div className="bg-low-green absolute inset-0 z-11 container origin-top"></div>
      <div className="bg-low-blue absolute inset-0 z-10 container origin-top"></div>
    </>
  );
}
// import React from "react";

// const Loader = () => {
//   return <div></div>;
// };

// export default Loader;
