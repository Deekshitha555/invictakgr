"use client";
import { GiBasketballBasket, GiVolleyballBall, GiSprint, GiCricketBat } from "react-icons/gi";
import { motion } from "framer-motion";
import UniformGrid from "./ui/uniformgrid";
const Uniformoutdoorgames = () => {
    const games = [
        {
            title: "Basketball",
            description: "Experience the thrill of fast-paced action on the court. ",
            icon: < GiBasketballBasket className="text-3xl text-yellow-400" />,
            img: "/images/outdoorgames/basketball.png",
            imgAlt: "basketball",
            link: "/sports/outdoorgames/basketball"
        },
        {
            title: "Volleyball",
            description: "Spike, block, and dive in this high-energy team sport.",
            icon: <GiVolleyballBall className="text-3xl text-yellow-400" />,
            img: "/images/outdoorgames/volleyball.png",
            imgAlt: "volleyball",
            link: "/sports/outdoorgames/volleyball"
        },
        {
            title: "Kabaddi",
            description: "Strategize and tag to bring out the warrior spirit in you.",
            icon: <GiSprint className="text-3xl text-yellow-400" />,
            img: "/images/outdoorgames/kabbadi.png",
            imgAlt: "kabaddi",
            link: "/sports/outdoorgames/kabaddi"
        },
        {
            title: "Cricket",
            description: "Step onto the pitch and showcase your skills in this iconic game of bat and ball, celebrated worldwide..",
            icon: <GiCricketBat className="text-2xl text-yellow-400" />,
            img: "/images/outdoorgames/cricket.png",
            imgAlt: "cricket",
            link: "/sports/outdoorgames/cricket"
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
                    Sports events
                </motion.h1>
            </div>
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
                    Outdoor games
                </motion.h1>
            </div>
            <UniformGrid events={games} />
        </section>
    )
}
export default Uniformoutdoorgames;