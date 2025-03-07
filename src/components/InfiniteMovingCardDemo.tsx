"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
export function InfiniteMovingCardsDemo() {
  return (
    <div className="mt-20 mb-10 h-[30rem] rounded-md flex flex-col relative overflow-hidden w-full">
      <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[60vw] mt-5 mx-auto mb-10">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="md:text-4xl text-3xl lg:text-6xl sm:text-2xl font-bold text-center text-yellow-500"
                >
                    Supporting Partners
                </motion.h1>
            </div>
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
    src:"/images/sponsors/sponsors.jpg"
  },
  {
    src:"/images/sponsors/sponsors2.jpg"
  },
  {
    src:"/images/sponsors/sponsors3.jpg"
  },
  {
    src:"/images/sponsors/sponsors4.png"
  },
];
/*
const testimonials1 = [
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
];*/
