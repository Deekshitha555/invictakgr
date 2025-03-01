"use client";

import React from "react";
import Navbar from "./Navbar";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar />
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full 
          [max-height:640px]:object-cover
          object-fit mt-10 z-10"
        src="/videos/invictavideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      /> 
       <TextGenerateEffect
        words="Invicta - A state level Sports and Cultural Fest organized by Department of student Affairs at KGRCET campus."
        className="text-center py-10 mb-5 text-[40px] md:text-5xl lg:hidden xl-hidden"
      />
    </div>
  );
};

export default HeroSection;
