import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrendingSection } from "@/components/home/TrendingSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <TrendingSection />
      </main>

      <Footer />
    </div>
  );
}
