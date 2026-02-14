import Button from "./Button";
import ElectricBorder from "./ElectricBorder";
import { Skiper48 } from "./Skiper-1";

const About = () => {
  return (
    <div className="w-full overflow-x-clip">
      <div className="flex flex-col items-start justify-center gap-16 px-[64px] py-[96px]">
        <h2>
          Join Qaumly For Fun <br /> Quizzes And Earn <br /> Points While <br />
          Exploring Countries!
        </h2>
        <div className="flex w-full items-start justify-start">
          <Skiper48 />
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <p className="max-w-[320px]">
              Join us for a fun learning adventure! Qaumly transforms exploring
              countries into an exciting game with engaging facts, quizzes, and
              shiny badges.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button path="/" name="Start Learning" status="solid" />
              <Button path="/" name="Take A Quiz" status="secondary" />
            </div>
          </div>
        </div>
      </div>

      <ElectricBorder color="#61B329" speed={0.2} chaos={0.1} thickness={1}>
        <div className="w-screen"></div>
      </ElectricBorder>
    </div>
  );
};

export default About;
