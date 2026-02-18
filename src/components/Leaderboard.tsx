import Button from "./Button";
import LeaderboardCard from "./LeaderboardCard";

const Leaderboard = () => {
  const data = [
    { position: 1, name: "Ahamd", score: 56 },
    { position: 2, name: "Bashir", score: 53 },
    { position: 3, name: "Hamad Ali", score: 51 },
  ];

  return (
    <div className="bg-back-green flex flex-col items-center justify-center gap-16 py-[96px]">
      <h2 className="text-center">Live Leaderboard!</h2>
      <div className="flex w-full flex-col items-center justify-center gap-8 px-4">
        {data.map((item, index) => (
          <LeaderboardCard key={index} feature={item} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-8 py-16">
        <p className="big_link">Over 100 curious minds have joined!</p>
        <div className="flex items-center justify-center gap-4">
          <Button path="/" name="Full Leaderboard" status="solid" />
          <Button path="/" name="View Your Score" status="not" />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
