import Ballpit from "./BallPit";
import Button from "./Button";
import ElectricBorder from "./ElectricBorder";

const CTA = () => {
  return (
    <div className="bg-light-blue h-dvh overflow-x-clip">
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
        className="h-dvh"
      >
        <Ballpit
          count={80}
          gravity={0.5}
          friction={1}
          wallBounce={1}
          followCursor
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-between">
          <ElectricBorder color="#2042b4" speed={0.2} chaos={0.1} thickness={1}>
            <div className="w-screen"></div>
          </ElectricBorder>
          <div className="flex flex-col items-center justify-center gap-16">
            <h1>Start Today, It&apos;s Free!</h1>
            <div className="flex items-center justify-center gap-4">
              <Button name="List Of Countries" path="/" status="solid" />
              <Button name="Take A Quiz" path="/" status="solid0" />
            </div>
          </div>
          <ElectricBorder color="#2042b4" speed={0.2} chaos={0.1} thickness={1}>
            <div className="w-screen"></div>
          </ElectricBorder>
        </div>
      </div>
    </div>
  );
};

export default CTA;
