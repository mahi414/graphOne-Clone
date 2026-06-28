import { Navbar } from "@/components/layout/Navbar";
import Hero from "@/components/investors/Hero";
import TrendingInvestors from "@/components/investors/TrendingInvestors";
import InvestorCollections from "@/components/investors/InvestorCollections";
import BrowseInvestorType from "@/components/investors/BrowseInvestorType";
import MostActiveInvestors from "@/components/investors/MostActiveInvestors";
import WinnersAndThemes from "@/components/investors/WinnersAndThemes";
import EmergingInvestors from "@/components/investors/EmergingInvestors";
import CapitalGraphSection from "@/components/investors/CapitalGraphSection";
import InvestorNetworkCTA from "@/components/investors/InvestorNetworkCTA";
import { Footer } from "@/components/layout/Footer";



export default function Page() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <TrendingInvestors />
        <InvestorCollections/>
        <BrowseInvestorType/>
        <MostActiveInvestors/>
        <WinnersAndThemes/>
        <EmergingInvestors/>
        <CapitalGraphSection/>
        <InvestorNetworkCTA/>
      </div>
      
      <Footer/>
    </>
  );
}