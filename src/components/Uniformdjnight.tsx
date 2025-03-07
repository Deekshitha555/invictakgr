"use client";
import { GiMusicalNotes } from "react-icons/gi";
import { motion } from "framer-motion";
import Uniformdjnightui from "./ui/uniformdjnightui";

const UniformDJNight = () => {
  const events = [
    {
      title: "DJ Night",
      description: "Get ready for an electrifying evening with live DJ performances, dazzling lights, and vibrant energy.",
      icon: <GiMusicalNotes className="text-3xl text-purple-500" />,
      img: "/images/djnight.jpg", // Add the appropriate image
      imgAlt: "DJ Night Dance Floor",
      link: "/djnight", // Add the registration link
    },
  ];

    return (
        <section className="pt-10 text-white">
            {/* Heading */}
            <div className=" max-w-[70vw] md:max-w-xl lg:max-w-[60vw] mt-5 mx-auto mb-10 items-center">
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
                   Dj Night
                </motion.h1>
            </div>
            <Uniformdjnightui events={events} />
        </section>
    )
}
export default UniformDJNight;