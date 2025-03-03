"use client";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
const Dramatics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      category: "Stand-up (Solo)",
      details: [
        "Time duration: 10 min",
        "Registration Fee: ₹200/-",
      ],
      link: "/ticket"
    },
    {
      category: "Skit (Group)",
      details: [
        "Time duration: 15-20 min",
        "Registration Fee: ₹500/-",
      ],
      link: "/ticket"
    },
  ];
  const coordinators = [
    { name: "Karthik", role: "President", phone: "6301308494" },
    { name: "Phani Teja ", role: "Vice President", phone: "9515580434" },
    { name: "Sunny", role: "Cultural Convenor", phone: "9121320833" },
    { name: "Shravya Verma", role: "Cultural Convenor", phone: "7013931616" },
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
            src="/images/bgimg/bgdramatics.jpg" // Replace with your actual logo path
            alt="women throwball background"
            width={850}
            height={50}
            className="rounded-xl shadow-md object-cover lg:object-fill"
          />
          {/* Main Content */}
          <div className="relative z-10 p-4 sm:p-30">
            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 text-center mt-10">
              Dramatics
            </h1>

            {/* Logo Section */}
            <div className="flex justify-center mt-6">
              <Image
                src="/images/cultural/dramatics.png" // Replace with your actual logo path
                alt="Event Logo"
                width={150}
                height={150}
                className="rounded-sm shadow-md"
              />
            </div>

            {/* Cards Section */}
            <motion.div
              className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {categories.map((category, index) => (
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
                          className="flex items-center space-x-3 text-gray-200"
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

export default Dramatics;
