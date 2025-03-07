import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";
export function FocusCardsDemo() {
  const cards = [
    {
      title: "Dr. Udaya Sri Kakarla ",
      src: "/images/testimonials/udaysrimam.jpg",
      designation:"Dean DSA",
      contact:"9490116270"
    },
    {
      title: "Dr. Zareena Zameer ",
      src: "/images/testimonials/zareenamam.jpg",
      designation:"Associate Dean DSA",
      contact:"9490116270"
    },
    {
      title: "Vadla Vinay Sai",
      src: "/images/testimonials/Vinay.jpg",
      designation:"President",
      contact:"7995991466"
    },
    {
      title: "Chella Sai Charan",
      src: "/images/testimonials/charan.jpg",
      designation:"Vice President",
      contact:"7993605410"
    },
    {
      title: "Papineni Divya",
      src: "/images/testimonials/divya.jpg",
      designation:"General Secretary",
      contact:"8328587537"
    },
    
    {
      title: "Talari Rakesh",
      src:"/images/testimonials/Rakesh.jpg",
      designation:"Sports Secretary",
      contact:"6300244591"
    },
    {
      title: "Kondagari Jahanavi",
      src: "/images/testimonials/Jahanavi.jpg",
      designation:"Sports Secretary",
      contact:"9346319192"
    },
    {
      title: "Shravya Verma",
      src: "/images/testimonials/shravya.jpg",
      designation:"Cultural Convenor",
      contact:"7013931616"
    },
    {
      title: "Sunny",
      src: "/images/testimonials/sunny.jpg",
      designation:"Cultural Convenor",
      contact:"9121320833"
    },
    {
      title: "Parasu Deekshitha",
      src: "/images/testimonials/deekshitha.png",
      designation:"Designer and Developer",
      contact:"9347284695"
    },
  ];

  return (
    <>
      <div className="max-w-[100vw] md:max-w-7xl lg:max-w-[120vw] mt-20 mb-10">
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
            duration: 3,
          }}
          className="md:text-4xl text-3xl lg:text-6xl lg:text-center sm:text-2xl font-bold text-center text-yellow-500"
        >
          Event Coordinators
        </motion.h1>
      </div>
      <FocusCards cards={cards} />
    </>
  );
}
