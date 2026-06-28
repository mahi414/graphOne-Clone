import { Navbar } from "@/components/layout/Navbar";
import HeroSection from "@/components/products/HeroSection";
import SidebarNav from "@/components/products/SidebarNav";
import CollectionSection from "@/components/products/CollectionSection";
import CategoryTabs from "@/components/products/CategoryTabs";
import PopularRightNow from "@/components/products/PopularRightNow";
import TrendingProducts from "@/components/products/TrendingProducts";
import PopularRightBar from "@/components/products/PopularRightBar";
import SidebarContribute from "@/components/products/SidebarContribute";
import React from "react";
import { Footer } from "@/components/layout/Footer";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* BODY */}
     {/* BODY */}
<div className="flex flex-1">
  
  {/* LEFT SIDEBAR (hidden on small screens) */}
  <aside className="hidden xl:flex w-64 border-r border-gray-100 bg-white flex-col sticky top-14 h-[calc(100vh-56px)]">
    <div className="flex flex-col h-full">
      
      <div className="flex-1 p-3 overflow-hidden">
        <SidebarNav />
      </div>

      <div className="p-3 border-t border-gray-100 shrink-0">
        <SidebarContribute />
      </div>

    </div>
  </aside>

  {/* MAIN CONTENT */}
  <main className="flex-1 min-w-0">
    <HeroSection />
    <CollectionSection />
    <CategoryTabs />
    <PopularRightNow />
    <TrendingProducts />
  </main>

  {/* RIGHT SIDEBAR (hidden on mobile + tablet) */}
  <aside className="hidden lg:block w-64 border-l border-gray-100 bg-white sticky top-14 h-[calc(100vh-56px)] overflow-hidden">
    <div className="p-3">
      <PopularRightBar />
    </div>
  </aside>

</div>

      <Footer />
    </div>
  );
};

export default Page;