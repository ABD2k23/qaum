"use client";
import React, { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tests = [
    {
      name: "Asif Ali",
      description:
        "Qaumly makes learning history an exciting adventure! With quick lessons and fun quizzes, I'm eager to explore more of the past. Who knew history could be this enjoyable?",
    },
    {
      name: "Yousaf",
      description:
        "Everything you need is right here! Dive into a delightful mix of history, culture, and geography. It’s like a treasure chest of knowledge waiting to be explored! Love it!",
    },
    {
      name: "Haider",
      description:
        "Every weekend, the leaderboard turns into a thrilling battleground where I go head-to-head with my cousin! It's like a friendly rivalry that keeps us on our toes.",
    },
    {
      name: "Zainab",
      description:
        "I finally understand the silk road! The visual maps and storytelling make facts stick in my head way better than my old textbooks ever did. 10/10 recommendation!",
    },
    {
      name: "Omar",
      description:
        "The bitesize lessons are perfect for my commute. I can learn about ancient civilizations in the time it takes to get to the next station. Super convenient!",
    },
    {
      name: "Sara",
      description:
        "The art and design of the app are so vibrant! It doesn't feel like 'studying' at all. It feels like playing a high-quality strategy game where I'm the winner.",
    },
    {
      name: "Bilal",
      description:
        "I love the cultural trivia section. I learned things about my own heritage that I never knew before. It's truly eye-opening and deeply respectful.",
    },
    {
      name: "Fatima",
      description:
        "The quiz system is addictive! I find myself repeating levels just to get that perfect score and unlock the next achievement badge. My streak is at 15 days!",
    },
    {
      name: "Hamza",
      description:
        "Great for all ages. I started using it, and now my younger brother and even my dad are competing with me. It’s become a nightly family ritual!",
    },
  ];

  const nextSlide = () => {
    // If at the last slide, reset to 0, otherwise increment
    setCurrentIndex((prev) => (prev === tests.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    // If at the first slide, jump to the last, otherwise decrement
    setCurrentIndex((prev) => (prev === 0 ? tests.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col gap-[64px]">
      <div className="flex flex-col items-start justify-center gap-[64px] overflow-clip px-[64px] py-[96px]">
        <h1>Happy Voices</h1>

        {/* Carousel Window */}
        <div className="w-full overflow-visible">
          <div
            className="flex items-center gap-[64px] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (480 + 64)}px)` }}
          >
            {tests.map((test, index) => {
              // This logic cycles through 0, 1, 2 regardless of how many items exist
              const colorIndex = index % 3;

              const cardStyle =
                colorIndex === 0
                  ? "bg-light-red border-red"
                  : colorIndex === 1
                    ? "bg-light-blue border-blue"
                    : "bg-light-green border-green";

              return (
                <div
                  key={index} // Using index as key is safer here if 'count' isn't unique
                  className={`squircle flex h-[320px] w-[480px] shrink-0 flex-col items-start justify-between gap-4 rounded-[32px] border p-8 transition-all duration-500 ${cardStyle}`}
                >
                  <p>{test.description}</p>
                  <h3>{test.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-8">
          {/* Prev Button */}
          <div
            onClick={prevSlide}
            className="squircle group hover:bg-blue flex h-16 w-16 cursor-pointer items-center justify-center rounded-[1000px] border border-black transition-all duration-200"
          >
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 6.36401C17.5523 6.36401 18 6.81173 18 7.36401C18 7.9163 17.5523 8.36401 17 8.36401V7.36401V6.36401ZM0.292892 8.07112C-0.0976315 7.6806 -0.0976315 7.04743 0.292892 6.65691L6.65685 0.292946C7.04738 -0.0975785 7.68054 -0.0975785 8.07107 0.292946C8.46159 0.68347 8.46159 1.31664 8.07107 1.70716L2.41421 7.36401L8.07107 13.0209C8.46159 13.4114 8.46159 14.0446 8.07107 14.4351C7.68054 14.8256 7.04738 14.8256 6.65685 14.4351L0.292892 8.07112ZM17 7.36401V8.36401H1V7.36401V6.36401H17V7.36401Z"
                className="transition-200 fill-black transition-all group-hover:fill-white"
              />
            </svg>
          </div>

          {/* Next Button */}
          <div
            onClick={nextSlide}
            className="squircle group hover:bg-red flex h-16 w-16 cursor-pointer items-center justify-center rounded-[1000px] border border-black transition-all duration-200"
          >
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401V7.36401V6.36401ZM17.7071 8.07112C18.0976 7.6806 18.0976 7.04743 17.7071 6.65691L11.3431 0.292946C10.9526 -0.0975785 10.3195 -0.0975785 9.92893 0.292946C9.53841 0.68347 9.53841 1.31664 9.92893 1.70716L15.5858 7.36401L9.92893 13.0209C9.53841 13.4114 9.53841 14.0446 9.92893 14.4351C10.3195 14.8256 10.9526 14.8256 11.3431 14.4351L17.7071 8.07112ZM1 7.36401V8.36401H17V7.36401V6.36401H1V7.36401Z"
                className="transition-200 fill-black transition-all group-hover:fill-white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
