"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";

// Define the interface for better type safety
interface Feature {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  img: string;
  tone: "red" | "blue" | "green";
}

function FeaturesCard({ feature }: { feature: Feature }) {
  const { title, p1, p2, p3, img, tone } = feature;

  return (
    <div
      className={`squircle flex h-[240px] w-full max-w-[420px] flex-col items-center justify-center overflow-hidden rounded-[32px] border ${
        tone === "red"
          ? "border-low-red bg-light-red"
          : tone === "blue"
            ? "border-low-blue bg-light-blue"
            : "border-low-green bg-light-green"
      }`}
    >
      <Card img={img} p1={p1} p2={p2} p3={p3} title={title}>
        <CanvasRevealEffect
          animationSpeed={4}
          tone={tone}
          containerClassName={`${
            tone === "red"
              ? "bg-low-red"
              : tone === "blue"
                ? "bg-low-blue"
                : "bg-low-green"
          }`}
          colors={[
            tone === "red"
              ? [179, 60, 70]
              : tone === "blue"
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
  img,
  p1,
  p2,
  p3,
  title,
}: {
  children?: React.ReactNode;
  img: string;
  p1: string;
  p2: string;
  p3: string;
  title: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative flex h-full w-full cursor-grab items-center justify-center rounded-[32px]"
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

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center p-4">
        {/* Default State */}
        <div className="flex flex-col items-center gap-4 transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          <Image src={img} alt={title} width={96} height={96} />
          <h4 className="">{title}</h4>
        </div>

        {/* Hover State - Absolute centered so it doesn't push layout */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 px-8 text-center text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 lg:px-16">
          <p className="font-medium! text-black!">
            {p1} {p2} {p3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
