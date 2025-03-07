"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";


type CardType = {
  title: string;
  src: string;
  designation: string;
  contact: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType; // Specify the type here
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const handleDoubleClick = () => {
      setHovered(null); // Reset the state on double-click
    };

    return (
      <div
        onClick={() => setHovered(index)}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-2xl relative overflow-hidden w-full transition-all duration-300 ease-out",
          "h-64 sm:h-80 md:h-96", // Increased height for mobile
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-contain absolute inset-0 object-top" // Focuses on the top portion
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex flex-col items-end justify-end py-6 px-4 sm:py-8 sm:px-6 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-2xl sm:text-2xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
          <div className="text-lg sm:text-lg md:text-xl font-light text-neutral-300">
            {card.designation}
          </div>
          <div className="text-sm sm:text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.contact}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
     
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 md:ml-5 md:mr-10 px-6 sm:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </>
  );
}
