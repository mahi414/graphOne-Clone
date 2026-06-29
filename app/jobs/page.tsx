import SidebarNav from "@/components/products/SidebarNav";
import SidebarContribute from "@/components/products/SidebarContribute";
import { Navbar } from "@/components/layout/Navbar";
import Sidebar from "@/components/news/Sidebar";
import { Footer } from "@/components/layout/Footer";
import RightSidebar from "@/components/jobs/RightSidebar";
import JobsHeader from "@/components/jobs/JobsHeader";
import TrendingCompanies from "@/components/jobs/TrendingCompanies";
import TrendingJobs from "@/components/jobs/TrendingJobs";
import EngineeringJobs from "@/components/jobs/EngineeringJobs";
import ProductJobs from "@/components/jobs/ProductsJob";
import DesignJobsSection from "@/components/jobs/DesignJobsSection";
import LoadMoreJobsButton from "@/components/jobs/LoadMoreJobsButton";


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
            <TrendingJobs/>
            <EngineeringJobs/>
            <ProductJobs/>
            <DesignJobsSection/>
            <LoadMoreJobsButton/>


    
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:flex
  w-64
  border-l border-gray-100
  bg-white
  sticky top-14
  h-[calc(100vh-56px)]
  overflow-hidden
  justify-center
  items-center ">
          <div className="space-y-6 pb-10">
            <RightSidebar />
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default Page;