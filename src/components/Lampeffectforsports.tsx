"use client"
import React from 'react'
import { LampContainer } from '@/components/ui/lamp';
import { motion } from "framer-motion"
const Lampeffectforsports = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-100 to-slate-100 sm:py-10  bg-clip-text text-center text-4xl font-medium  text-transparent md:text-4xl "
      >
        From the Track to the Field — Celebrating the Spirit of Competition
      </motion.h1>
    </LampContainer>
  )
}

export default Lampeffectforsports