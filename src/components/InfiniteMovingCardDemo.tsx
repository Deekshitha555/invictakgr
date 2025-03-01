"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="mt-20 mb-10 h-[20rem] rounded-md flex flex-col relative overflow-hidden w-full">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    src:"/images/cultural/onthebeat.png"
  },
  {
    src:"/images/cultural/octaves.png"
  },
  {
    src:"/images/cultural/palette.png"
  },
  {
    src:"/images/cultural/pixels.png"
  },
  {
    src:"/images/cultural/dramatics.png"
  },
  {
    src:"/images/cultural/storylines.png"
  },
  {
    src:"/images/outdoorgames/basketball.png"
  },
  {
    src:"/images/outdoorgames/kabbadi.png"
  },
  {
    src:"/images/outdoorgames/cricket.png"
  },
  {
   src:"/images/outdoorgames/volleyball.png"
  },
  {
   src:"/images/outdoorgames/womenthrowball.png"
  },
  {
    src:"/images/outdoorgames/deadlift.jpg"
   },
  {
    src:"/images/indoorgames/carroms.png"
   },
   {
    src:"/images/indoorgames/chess.png"
   },
   {
    src:"/images/indoorgames/tabletennis.png"
   },
];
