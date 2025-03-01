"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Event = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  img?: string;
  imgAlt?: string;
  link?: string;
};

type UniformGridProps = {
  events: Event[];
};

const UniformGrid: React.FC<UniformGridProps> = ({ events }) => {
  return (
    <section className="pt-10 text-white min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-purple-900 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 text-gray-100 transform transition-transform duration-300 hover:translate-x-2"
          >
            {/* Icon */}
            <div className="mb-4">{event.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-bold text-center text-orange-100 mb-2">
              {event.title}
            </h3>
            {/* Image */}
            <div className="relative w-full h-60 mb-4">
              <Image
                src={event.img || "/placeholder.png"}
                alt={event.imgAlt || "Event Image"}
                layout="fill"
                className="object-cover rounded-md"
              />
            </div>
            {/* Description */}
            <p className="text-center text-sm mb-4">{event.description}</p>
            {/* Explore Button */}
            <Link href={event.link || "#"}>
              <button className="px-4 py-2 bg-orange-400 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors">
                Explore
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UniformGrid;
