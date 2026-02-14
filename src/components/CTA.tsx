import Ballpit from "./BallPit";
import Button from "./Button";
import ElectricBorder from "./ElectricBorder";
import FloatingLines from "./FloatingLines";

const CTA = () => {
  return (
    <div className="bg-low-blue h-dvh overflow-x-clip">
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
        className="h-dvh"
      >
        {/* <Ballpit
          count={80}
          gravity={0.5}
          friction={1}
          wallBounce={1}
          followCursor
        /> */}
        <FloatingLines
          color="rgba(248, 249, 250, 1)"
          enabledWaves={["middle"]}
          lineCount={3}
          lineDistance={100}
          bendRadius={30}
          bendStrength={15}
          interactive={false}
          parallax={false}
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end">
          <ElectricBorder color="#2042b4" speed={0.2} chaos={0.1} thickness={1}>
            <div className="w-screen"></div>
          </ElectricBorder>
          <div className="absolute top-1/2 right-1/2 flex w-full translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-16">
            <h1>Start Today, It&apos;s Free!</h1>
            <div className="flex items-center justify-center gap-4">
              <Button name="List Of Countries" path="/" status="solid" />
              <Button name="Take A Quiz" path="/" status="solid0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
