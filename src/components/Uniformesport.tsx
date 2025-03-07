"use client";
import { FaGamepad, FaCrosshairs } from "react-icons/fa";
import { motion } from "framer-motion";
import Uniformesportui from "./ui/uniformesportui";

const Uniformesport = () => {
    const games = [
        {
            title: "BGMI",
            description: "Battle it out in immersive landscapes and intense combat scenarios.",
            icon: <FaCrosshairs className="text-3xl text-red-500" />, 
            img: "/images/esports/bgmi.jpg",
            imgAlt: "bgmi",
            link: "/esports/bgmi"
        },
        {
            title: "FreeFire",
            description: "Engage in fast-paced survival action with strategic gameplay.",
            icon: <FaGamepad className="text-3xl text-blue-400" />, 
            img: "/images/esports/freefire.png",
            imgAlt: "freefire",
            link: "/esports/freefire"
        },
    ];

    return (
        <section className="pt-10 text-white">
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
                   E-Sports
                </motion.h1>
            </div>
            <Uniformesportui events={games} />
        </section>
    );
};

export default Uniformesport;
