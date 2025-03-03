"use client";

import React, { useState, useEffect } from "react";
import { FaRunning, FaMusic, FaPaintBrush, FaCamera, FaTheaterMasks} from "react-icons/fa";
import UniformGrid from "./ui/uniformgrid";
import { motion } from "framer-motion";
import LoadingSpinner from "@/components/Loadingspinner"; // Ensure you have a spinner component

const events = [
  {
    title: "Dance",
    description: "Feel the rhythm, express your soul, and inspire through the art of movement.",
    icon: <FaRunning className="text-3xl text-orange-400" />,
    img: "/images/cultural/onthebeat.png",
    imgAlt: "on the beat",
    link: "/cultural/dance",
  },
  {
    title: "Music",
    description: "Discover the magic of melodies and harmonies.",
    icon: <FaMusic className="text-3xl text-orange-400" />,
    img: "/images/cultural/octaves.png",
    imgAlt: "octaves",
    link: "/cultural/music",
  },
  {
    title: "Arts",
    description: "Unleash your creativity and turn imagination into masterpieces.",
    icon: <FaPaintBrush className="text-3xl text-orange-400" />,
    img: "/images/cultural/palette.png",
    imgAlt: "palette",
    link: "/cultural/arts",
  },
  {
    title: "Photography",
    description: "Capture life’s most beautiful moments and tell stories through your lens.",
    icon: <FaCamera className="text-3xl text-orange-400" />,
    img: "/images/cultural/pixels.png",
    imgAlt: "pixels",
    link: "/cultural/photography",
  },
  {
    title: "Dramatics",
    description: "Step into the spotlight and bring characters to life.",
    icon: <FaTheaterMasks className="text-3xl text-orange-400" />,
    img: "/images/cultural/dramatics.png",
    imgAlt: "dramatix",
    link: "/cultural/dramatics",
  }
];

export default function Uniformculturalgrid() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-10 text-white">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {/* Heading */}
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
              Cultural events
            </motion.h1>
          </div>
          <UniformGrid events={events} />
        </>
      )}
    </section>
  );
}
