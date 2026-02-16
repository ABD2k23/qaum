import Button from "./Button";

const Leaderboard = () => {
  const data = [
    { position: 1, name: "Ahamd", score: 56 },
    { position: 2, name: "Bashir", score: 53 },
    { position: 3, name: "Hamad Ali", score: 51 },
  ];
  return (
    <div className="bg-back-green flex flex-col items-center justify-center gap-16 py-[96px]">
      <h2 className="text-center">Live Leaderboard!</h2>
      <div className="flex w-full flex-col items-center justify-center gap-8">
        {data.map((item) => (
          <div
            key={item.name}
            className={`squircle flex w-full max-w-[1200px] justify-between rounded-[16px] border-b p-4 ${item.position === 1 ? "border-low-red bg-light-red border" : item.position === 2 ? "border-low-blue bg-light-blue border" : item.position === 3 ? "border-low-green bg-light-green border" : "border border-black bg-white"}`}
          >
            <div className="flex items-center justify-center gap-4">
              <h4
                className={`squircle big_link rounded-[32px] p-4 font-bold! text-white ${item.position === 1 ? "bg-red" : item.position === 2 ? "bg-blue" : item.position === 3 ? "bg-green" : "bg-black"}`}
              >
                0{item.position}
              </h4>
              <h4>{item.name}</h4>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* <p className="big_link font-bold!">Total Score </p> */}
              <p
                className={`squircle rounded-[16px] p-2 px-3 font-bold! text-white ${item.position === 1 ? "bg-red" : item.position === 2 ? "bg-blue" : item.position === 3 ? "bg-green" : "border border-black text-black!"}`}
              >
                {item.score} out of 60
              </p>
            </div>
          </div>
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
