"use client";
import { GiChessKing, GiCardPlay } from "react-icons/gi";
import { MdSportsTennis } from "react-icons/md";

import { motion } from "framer-motion";
import UniformGrid from "./ui/uniformgrid";

const UniformIndoorgames = () => {
    const games = [
        {
            title: "Carroms",
            description: "Showcase your precision and strategy in this classic indoor board game.",
            icon: <GiCardPlay className="text-3xl text-yellow-400" />,
            img: "/images/indoorgames/carroms.png",
            imgAlt: "Carroms",
            link:"/sports/indoorgames/carroms"
        },
        {
            title: "Chess",
            description: "Challenge your mind and master the art of strategy on the chessboard.",
            icon: <GiChessKing className="text-3xl text-yellow-400" />,
            img: "/images/indoorgames/chess.png",
            imgAlt: "Chess",
            link:"/sports/indoorgames/chess"
        },
        {
            title: "Table Tennis",
            description: "Experience the thrill of speed and skill in this high-energy game.",
            icon: <MdSportsTennis className="text-3xl text-yellow-400" />,
            img: "/images/indoorgames/tabletennis.png",
            imgAlt: "Table Tennis",
            link:"/sports/indoorgames/tabletennis"
        },
        
    ];

    return (
        <section className="pt-10 text-white">
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
                    Indoor Games
                </motion.h1>
            </div>
            <UniformGrid events={games} />
        </section>
    )
}
export default UniformIndoorgames;