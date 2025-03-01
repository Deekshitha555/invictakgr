import React from "react";
import Footer from "@/components/Footer";
import Separator from "@/components/Separator";
import Navbar from "@/components/Navbar";
export default function CulturalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-col justify-center items-center overflow-hidden sm:px-0" suppressHydrationWarning>
      {/* Navbar */}
      <Navbar />
      

      {/* Page Content */}
      <div className="w-full">{children}</div>

      {/* Separator and Footer */}
      <Separator />
      <Footer />
    </main>
  );
}
