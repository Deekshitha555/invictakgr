"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LoadingSpinner from "@/components/Loadingspinner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setLoading(true);
    // Simulate loading time or wait for navigation to complete
    setTimeout(() => setLoading(false), 2000); // Adjust time as needed
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <nav className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div>
              <Image
                src="/images/kgrlogo.jpg"
                alt="kgrlogo"
                width={120}
                height={100}
                className="rounded-xl"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="text-white hover:text-purple-700 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/cultural"
                onClick={handleLinkClick}
                className="text-white hover:text-purple-700 transition duration-300"
              >
                Cultural
              </Link>
              <Link
                href="/sports"
                onClick={handleLinkClick}
                className="text-white hover:text-purple-700 transition duration-300"
              >
                Sports
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none mr-10"
              >
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-orange-500 absolute w-full top-16 z-50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="block text-white hover:text-purple-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/cultural"
                onClick={handleLinkClick}
                className="block text-white hover:text-purple-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Cultural
              </Link>
              <Link
                href="/sports"
                onClick={handleLinkClick}
                className="block text-white hover:text-purple-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Sports
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
