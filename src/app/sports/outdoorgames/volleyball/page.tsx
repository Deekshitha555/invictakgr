"use client";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Volleyball = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  const categories = [
    
  
    {
      category: "Team",
      details: [
        "Note: Participants can be both men and women",
        "Registration Fee: ₹2000/-",
      ],
     link: "/ticket/volleyball"
    },
  ];
  const coordinators = [
    { name: "Kondagari Jahanavi", role: "Sports Convenor", phone: "9346319192" },
    { name: "Talari Rakesh", role: "Sports Convenor", phone: "6300244591" },
  ];
  return (
    <div className="relative min-h-screen flex flex-col items-center text-white overflow-hidden">
      {/* Meteor Effect */}
      {isLoading ? (
        // Loading Spinner
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
        </div>
      ) : (
        <>
          <Image
            src="/images/bgimg/bgvolleyball.jpg" // Replace with your actual logo path
            alt="volleyball background"
            width={850}
            height={50}
            className="rounded-xl shadow-md object-cover lg:object-fill"
          />
          {/* Main Content */}
          <div className="relative z-10 p-4 sm:p-30">
            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 text-center mt-10">
              Volley ball
            </h1>

            {/* Logo Section */}
            <div className="flex justify-center mt-6">
              <Image
                src="/images/outdoorgames/volleyball.png" // Replace with your actual logo path
                alt="Event Logo"
                width={150}
                height={150}
                className="rounded-sm shadow-md"
              />
            </div>

            {/* Cards Section */}
            <motion.div
              className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {categories.map((category, index) => (
                <Link key={index} href={category.link}>
                  <motion.div
                    key={index}
                    className="bg-purple-900 border border-gray-700 shadow-lg rounded-xl p-6 w-[300px] mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                  >
                    <div className="relative z-10 p-5 sm:p-10">
                      <h2 className="text-2xl font-bold text-yellow-400">
                        {category.category}
                      </h2>
                      <ul className="mt-3 text-gray-200 space-y-2">
                        {category.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-center space-x-2 text-gray-200"
                          >
                            <FaCheckCircle className="text-green-500 text-lg" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => router.push(category.link)}
                        className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-colors"
                      >
                        Register Now
                      </button>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-yellow-400 text-center">
                Contact Details
              </h2>
              <div className="mt-6 space-y-4">
                {coordinators.map((coordinator, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-purple-900 p-4 rounded-lg shadow-lg w-[300px] mx-auto"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-300">
                        {coordinator.name}
                      </h3>
                      <p className="text-gray-200">{coordinator.role}</p>
                    </div>
                    <p className="text-green-400">{coordinator.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Volleyball;
