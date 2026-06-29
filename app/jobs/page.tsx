import SidebarNav from "@/components/products/SidebarNav";
import SidebarContribute from "@/components/products/SidebarContribute";
import { Navbar } from "@/components/layout/Navbar";
import Sidebar from "@/components/news/Sidebar";
import { Footer } from "@/components/layout/Footer";
import RightSidebar from "@/components/jobs/RightSidebar";
import JobsHeader from "@/components/jobs/JobsHeader";
import TrendingCompanies from "@/components/jobs/TrendingCompanies";


const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* BODY */}
      <div className="flex flex-1">
        {/* LEFT SIDEBAR */}
        <aside className="hidden xl:flex w-64 border-r border-gray-100 bg-white sticky top-14 h-[calc(100vh-56px)] flex-col">
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
        <main className="flex-1">
          <div className=" mx-auto px-10 py-6">
            <JobsHeader/>
            <TrendingCompanies/>


           
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden xl:flex w-72 shrink-0 border-l border-gray-100 bg-white sticky top-14 h-[calc(100vh-56px)] justify-center overflow-y-auto">
          <div className="px-2 justify-between">
            <RightSidebar />
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default Page;