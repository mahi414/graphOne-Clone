import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

import Hero from "@/components/home/Hero";
import Collections from "@/components/home/Collections";
import ProductSection from "@/components/home/ProductSection";
import RightSidebar from "@/components/home/RightSidebar";

export default function Home() {
  return (
    <div className="flex-col min-h-screen bg-[#FCFCFD]">
      <Sidebar />

      <div className="ml-[240px] flex-1">
        <Header />

        <main className="mx-auto max-w-[1500px] px-8 py-8">
          <div className="grid grid-cols-12 gap-8">
            <section className="col-span-8 space-y-8">
              <Hero />
              <Collections />
              <ProductSection />
            </section>

            <aside className="col-span-4">
              <RightSidebar />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}