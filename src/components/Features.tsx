import ElectricBorder from "./ElectricBorder";
import FeaturesCard from "./Features-card";
// Add your other imports here

const Features = () => {
  const features = [
    {
      title: "Learn",
      p1: "Discover 16 countries with fun facts!",
      p2: "Grab lasting insights.",
      p3: "Enjoy a quick dive into diverse cultures!",
      img: "/1ill/earth-ill.png",
      tone: "red" as const, // Ensures string literal type
    },
    {
      title: "Play",
      p1: "Challenge yourself with fun quizzes!",
      p2: "Enjoy 5 exciting levels! ",
      p3: "Test your smarts and have a blast!",
      img: "/1ill/play-ill.png",
      tone: "blue" as const,
    },
    {
      title: "Grow",
      p1: "Collect fun badges!",
      p2: "Race up the leaderboard! ",
      p3: "Show off your achievements!",
      img: "/1ill/plant-ill.png",
      tone: "green" as const,
    },
  ];

  return (
    <div className="features-move bg-back-red flex w-full flex-col items-center justify-center overflow-x-clip pb-[96px]">
      <ElectricBorder color="#b33c46" speed={0.2} chaos={0.1} thickness={1}>
        <div className="w-screen"></div>
      </ElectricBorder>

      <div className="relative mt-[96px] mb-[128px]">
        <h2 className="features-title text-center">Features</h2>
      </div>

      <div className="flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-6 px-[64px]">
        {features.map((feature, index) => (
          <FeaturesCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
