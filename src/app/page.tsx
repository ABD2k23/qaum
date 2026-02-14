import About from "@/components/About";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leaderboard from "@/components/Leaderboard";
import Testimonials from "@/components/Testimonials";

import React from "react";

const page = () => {
  return (
    <div className="bg-white text-black">
      <Hero />
      <Features />
      <About />
      <Leaderboard />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
