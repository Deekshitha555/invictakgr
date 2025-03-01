// pages/404.js
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Separator from "@/components/Separator";
import Footer from "@/components/Footer";
const Custom404 = () => {
  return (
    <main className="relative overflow-hidden pl-0 m-2">
    <div className="w-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />
  
      {/* Centered Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-6xl font-bold text-orange-500">404</h1>
        <p className="text-xl text-gray-500 mt-4">Page Not Found</p>
        <Link href="/" className="mt-6 text-white hover:underline">
          Go Back to Home
        </Link>
      </div>
  
      {/* Footer */}
      <Separator />
      <Footer />
    </div>
  </main>
  
  );
};

export default Custom404;
