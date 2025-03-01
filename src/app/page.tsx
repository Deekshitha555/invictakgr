"use client";

import React, { useState, useEffect } from "react";
import Separator from "@/components/Separator";
import Footer from "@/components/Footer";
import { FocusCardsDemo } from "@/components/Focuscard";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardDemo";
import HeroSection from "@/components/NewHerosection";
import Uniformculturalgrid from "@/components/Uniformculturalgrid";
import UniformIndoorgames from "@/components/Uniformindoorsportsgrid";
import Uniformoutdoorgames from "@/components/Uniformoutdoorgames";
import LoadingSpinner from "@/components/Loadingspinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-hidden pl-0 m-2 mr-2">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-screen">
          <HeroSection />
          <Uniformculturalgrid />
          <Separator />
          <Uniformoutdoorgames />
          <Separator />
          <UniformIndoorgames />
          <Separator />
          <FocusCardsDemo />
          <Separator />
          <InfiniteMovingCardsDemo />
          <Separator />
          <Footer />
        </div>
      )}
    </main>
  );
}
