"use client";
import { motion } from "framer-motion";

const Separator = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: 1.0,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className="w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 origin-left"
    />
  );
};

export default Separator;
