"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white py-8 px-6 w-full"
    >
      <div className="container flex flex-col space-y-10">
        {/* Logo Section */}
        <div className="flex flex-wrap justify-center md:justify-around items-center gap-6">
          {[
            { src: "/images/kgrlogo.jpg", alt: "KGR Logo" },
            { src: "/images/invicta.png", alt: "Invicta Logo" },
            { src: "/images/dsalogo.jpg", alt: "DSA Logo" },
            { src: "/images/eagles.png", alt: "Eagles Logo" },
          ].map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="w-48 h-38 sm:w-44 sm:h-44 md:w-44 md:h-44 flex items-center justify-center rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={212}
                height={212}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Links Section */}
        <div className="text-center md:text-center md:w-1/3 mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-yellow-500 hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/cultural"
                className="text-yellow-500 hover:text-white transition duration-300"
              >
                Cultural
              </a>
            </li>
            <li>
              <a
                href="/sports"
                className="text-yellow-500 hover:text-white transition duration-300"
              >
                Sports
              </a>
            </li>
            <li>
              <a
                href="/sports"
                className="text-yellow-500 hover:text-white transition duration-300"
              >
                Dj night
              </a>
            </li>
            <li>
              <a
                href="/sports"
                className="text-yellow-500 hover:text-white transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-5">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.instagram.com/invictakgrcet/"
              className="hover:transition duration-300"
            >
              <div className="h-[50px] flex items-center space-x-2">
                <FaInstagram className="text-2xl" />
                <h5 className="text-lg">invicta_kgrcet</h5>
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm text-gray-500">© 2025 Invicta. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
