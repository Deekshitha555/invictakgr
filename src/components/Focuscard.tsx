import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Dr. Udaya Sri Kakarla ",
      src: "/images/testimonials/udaysrimam.jpg",
      designation:"Dean Department of Student Affairs",
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
      contact:"9705273778"
    },
    {
      title: "Sunny",
      src: "/images/testimonials/sunny.jpg",
      designation:"Cultural Convenor",
      contact:"9347284695"
    },
    {
      title: "Parasu Deekshitha",
      src: "/images/testimonials/deekshitha.png",
      designation:"Designer and developer",
      contact:"9705273778"
    },
  ];

  return <FocusCards cards={cards} />;
}
