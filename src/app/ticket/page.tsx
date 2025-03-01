
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
        <h1 className="text-4xl lg:text-6xl font-bold text-orange-500"> Stay Tuned: Registrations Open Soon!</h1> 
      </div>
      {/* Footer */}
      <Separator />
      <Footer />
    </div>
  </main>
  
  );
};

export default Custom404;
