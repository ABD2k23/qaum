"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// Define the interface for better type safety
interface Feature {
  position: number;
  name: string;
  score: number;
}

function LeaderboardCard({ feature }: { feature: Feature }) {
  const { position, name, score } = feature;

  return (
    <div
      className={`squircle flex w-full max-w-[1200px] flex-col items-center justify-center overflow-hidden rounded-[32px] border ${
        position === 1
          ? "border-low-red bg-light-red"
          : position === 2
            ? "border-low-blue bg-light-blue"
            : "border-low-green bg-light-green"
      }`}
    >
      <Card position={position} name={name} score={score}>
        <CanvasRevealEffect
          animationSpeed={6}
          tone={position === 1 ? "red" : position === 2 ? "blue" : "green"}
          containerClassName={`${
            position === 1
              ? "bg-low-red"
              : position === 2
                ? "bg-low-blue"
                : "bg-low-green"
          }`}
          colors={[
            position === 1
              ? [179, 60, 70]
              : position === 2
                ? [32, 66, 180]
                : [97, 179, 41],
            // [32, 66, 180],
            // [97, 179, 41],
            // [179, 60, 70],
            // [15, 25, 19],
          ]}
          dotSize={2}
        />
      </Card>
    </div>
  );
}

const Card = ({
  children,
  position,
  name,
  score,
}: {
  children?: React.ReactNode;
  position: number;
  name: string;
  score: number;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative flex h-full min-h-[100px] w-full cursor-grab items-center justify-center rounded-[32px]" // Added min-h for visibility
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Z-20 Container: Removed 'flex' from this wrapper to prevent it 
          from pushing the absolute hover-state div around.
      */}
      <div className="relative z-20 h-full w-full p-4">
        {/* Default State */}
        <div className="flex w-full items-center justify-between gap-4 transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          <div className="flex items-center justify-center gap-4">
            <h4
              className={`squircle big_link rounded-[32px] p-4 font-bold text-white ${position === 1 ? "bg-red" : position === 2 ? "bg-blue" : position === 3 ? "bg-green" : "bg-black"}`}
            >
              0{position}
            </h4>
            <h4 className="">{name}</h4>
          </div>
          <div className="flex items-center justify-center gap-4">
            <p
              className={`squircle rounded-[16px] p-2 px-3 font-bold text-white ${position === 1 ? "bg-red" : position === 2 ? "bg-blue" : position === 3 ? "bg-green" : "border border-black text-black"}`}
            >
              {score} out of 60
            </p>
          </div>
        </div>

        {/* Hover State - Fixed Centering */}
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center opacity-0 transition duration-200 group-hover/canvas-card:opacity-100">
          <h3 className="text-black">{score} out of 60</h3>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;
