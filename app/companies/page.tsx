import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import CompanyGrid from "@/components/companies/CompanyGrid";

export default function CompaniesPage() {
  return (
    <div className="flex min-h-screen bg-[#FCFCFD]">
      <Sidebar />

      <div className="ml-[240px] flex-1">
        <Header />

        <main className="mx-auto max-w-[1500px] px-8 py-8">
          <CompanyGrid />
        </main>
      </div>
    </div>
  );
}