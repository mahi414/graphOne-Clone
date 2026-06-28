"use client";
import React, { useState, useMemo } from "react";
import { Grid3X3, List } from "lucide-react";
import { CompanyCard } from "@/components/ui/CompanyCard";

const EXPLORE_COMPANIES = [
  {
    name: "ElevenLabs",
    domain: "elevenlabs.io",
    category: "AI Voice",
    description:
      "ElevenLabs is a leading provider of state-of-the-art AI Voice technologies.",
    valuation: "$1.1B",
    growth: "+92%",
    fundingStage: "Series B",
    country: "USA",
    trendingScore: 98,
    dateAdded: "2024-01-15",
  },
  {
    name: "Phind",
    domain: "phind.com",
    category: "AI Coding",
    description:
      "Phind is a leading provider of state-of-the-art AI Coding technologies.",
    valuation: "$0.1B",
    growth: "+92%",
    fundingStage: "Series A",
    country: "USA",
    trendingScore: 85,
    dateAdded: "2024-02-10",
  },
  {
    name: "Cohere",
    domain: "cohere.com",
    category: "AI Models",
    description:
      "Cohere is a leading provider of state-of-the-art AI Models technologies.",
    valuation: "$5.5B",
    growth: "+85%",
    fundingStage: "Series C",
    country: "Canada",
    trendingScore: 92,
    dateAdded: "2023-11-05",
  },
  {
    name: "Character.ai",
    domain: "character.ai",
    category: "AI Chat",
    description:
      "Character.ai is a leading provider of state-of-the-art AI Chat technologies.",
    valuation: "$1.0B",
    growth: "+85%",
    fundingStage: "Series A",
    country: "USA",
    trendingScore: 88,
    dateAdded: "2023-09-20",
  },
  {
    name: "Ollama",
    domain: "ollama.com",
    category: "AI Infrastructure",
    description:
      "Ollama is a leading provider of state-of-the-art AI Infrastructure technologies.",
    valuation: "$0.2B",
    growth: "+85%",
    fundingStage: "Seed",
    country: "USA",
    trendingScore: 95,
    dateAdded: "2024-03-01",
  },
  {
    name: "Hugging Face",
    domain: "huggingface.co",
    category: "AI Infrastructure",
    description:
      "Hugging Face is a leading provider of state-of-the-art AI Infrastructure.",
    valuation: "$4.5B",
    growth: "+78%",
    fundingStage: "Series C",
    country: "USA",
    trendingScore: 94,
    dateAdded: "2022-05-12",
  },
  {
    name: "xAI",
    domain: "x.ai",
    category: "AI Models",
    description:
      "xAI is a leading provider of state-of-the-art AI Models technologies.",
    valuation: "$24.0B",
    growth: "+78%",
    fundingStage: "Series B",
    country: "USA",
    trendingScore: 99,
    dateAdded: "2023-07-12",
  },
  {
    name: "Lovable",
    domain: "lovable.dev",
    category: "AI Coding",
    description:
      "Lovable is a leading provider of state-of-the-art AI Coding technologies.",
    valuation: "$0.1B",
    growth: "+78%",
    fundingStage: "Seed",
    country: "UK",
    trendingScore: 82,
    dateAdded: "2024-04-18",
  },
  {
    name: "Midjourney",
    domain: "midjourney.com",
    category: "AI Image",
    description:
      "Midjourney is a leading provider of state-of-the-art AI Image technologies.",
    valuation: "$10.0B",
    growth: "+71%",
    fundingStage: "Self-Funded",
    country: "USA",
    trendingScore: 96,
    dateAdded: "2022-08-01",
  },
  {
    name: "Mistral AI",
    domain: "mistral.ai",
    category: "AI Models",
    description:
      "Mistral AI is a leading provider of state-of-the-art AI Models technologies.",
    valuation: "$6.0B",
    growth: "+71%",
    fundingStage: "Series B",
    country: "France",
    trendingScore: 97,
    dateAdded: "2023-12-10",
  },
  {
    name: "Pika",
    domain: "pika.art",
    category: "AI Video",
    description:
      "Pika is a leading provider of state-of-the-art AI Video technologies.",
    valuation: "$0.3B",
    growth: "+71%",
    fundingStage: "Seed",
    country: "USA",
    trendingScore: 89,
    dateAdded: "2023-10-25",
  },
  {
    name: "Cursor",
    domain: "cursor.sh",
    category: "AI Coding",
    description:
      "Cursor is a leading provider of state-of-the-art AI Coding technologies.",
    valuation: "$1.5B",
    growth: "+64%",
    fundingStage: "Series A",
    country: "USA",
    trendingScore: 91,
    dateAdded: "2023-06-30",
  },
];

export function ExploreGrid() {
  // Filters and Sorting State
  const [category, setCategory] = useState("All");
  const [fundingStage, setFundingStage] = useState("All");
  const [country, setCountry] = useState("All");
  const [sortBy, setSortBy] = useState("trending");

  // View Mode State: defaults to "grid"
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredAndSortedCompanies = useMemo(() => {
    const result = EXPLORE_COMPANIES.filter((company) => {
      const matchCategory = category === "All" || company.category === category;
      const matchFunding =
        fundingStage === "All" || company.fundingStage === fundingStage;
      const matchCountry = country === "All" || company.country === country;
      return matchCategory && matchFunding && matchCountry;
    });

    result.sort((a, b) => {
      if (sortBy === "trending") return b.trendingScore - a.trendingScore;
      if (sortBy === "funded") {
        const parseValuation = (val: string) => {
          const num = parseFloat(val.replace(/[^0-9.]/g, ""));
          return val.includes("B") ? num * 1000 : num;
        };
        return parseValuation(b.valuation) - parseValuation(a.valuation);
      }
      if (sortBy === "new")
        return (
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
      return 0;
    });

    return result;
  }, [category, fundingStage, country, sortBy]);

  return (
    <section
      id="explore-companies"
      className="scroll-mt-20 border-t border-gray-100 pt-12"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-baseline gap-2.5">
          <span className="text-4xl font-black text-gray-100 select-none">
            13
          </span>
          <div>
            <h2 className="text-2xl font-black text-gray-900 leading-tight">
              Explore All Companies
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Find, filter, and compare the right AI companies.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2 items-center text-xs">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-9 pl-3 pr-8 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400 outline-none shadow-sm font-semibold"
            >
              <option value="All">Category</option>
              <option value="AI Agents">AI Agents</option>
              <option value="AI Coding">AI Coding</option>
              <option value="AI Search">AI Search</option>
              <option value="AI Video">AI Video</option>
              <option value="AI Voice">AI Voice</option>
              <option value="AI Infrastructure">AI Infrastructure</option>
              <option value="AI Models">AI Models</option>
              <option value="AI Chat">AI Chat</option>
              <option value="AI Image">AI Image</option>
            </select>

            <select
              value={fundingStage}
              onChange={(e) => setFundingStage(e.target.value)}
              className="h-9 pl-3 pr-8 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400 outline-none shadow-sm font-semibold"
            >
              <option value="All">Funding Stage</option>
              <option value="Seed">Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B">Series B</option>
              <option value="Series C">Series C</option>
              <option value="Growth">Growth</option>
              <option value="Self-Funded">Self-Funded</option>
            </select>

            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="h-9 pl-3 pr-8 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400 outline-none shadow-sm font-semibold"
            >
              <option value="All">Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="France">France</option>
              <option value="Canada">Canada</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-9 pl-3 pr-8 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400 outline-none shadow-sm font-semibold"
            >
              <option value="trending">Trending</option>
              <option value="funded">Most Funded</option>
              <option value="new">Newest</option>
            </select>
          </div>

          {/* VIEW TOGGLE BUTTONS */}
          <div className="flex items-center gap-1 border border-gray-200 rounded-xl p-0.5 bg-gray-50 shadow-inner">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-lg text-xs transition-all ${
                viewMode === "grid"
                  ? "bg-white text-rose-500 shadow-sm border border-gray-200/50"
                  : "text-gray-400 hover:text-gray-600 border border-transparent"
              }`}
            >
              <Grid3X3 className="h-4.5 w-4.5" aria-hidden="true" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-lg text-xs transition-all ${
                viewMode === "list"
                  ? "bg-white text-rose-500 shadow-sm border border-gray-200/50"
                  : "text-gray-400 hover:text-gray-600 border border-transparent"
              }`}
            >
              <List className="h-4.5 w-4.5" aria-hidden="true" />
            </button>
          </div>

          <button className="px-5 h-9 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm whitespace-nowrap">
            Explore Companies
          </button>
        </div>
      </div>

      {filteredAndSortedCompanies.length > 0 ? (
        // Switch between Grid and Flex-Col based on viewMode
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-8"
              : "flex flex-col gap-4 mb-8"
          }
        >
          {filteredAndSortedCompanies.map((company) => (
            <CompanyCard
              key={company.name}
              {...company}
              viewMode={viewMode} // Pass the state down
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border-2 border-dashed border-gray-200 rounded-2xl mb-8">
          <h3 className="text-sm font-bold text-gray-900 mb-1">
            No companies found
          </h3>
          <p className="text-xs text-gray-500">
            Try adjusting your filters to see more results.
          </p>
          <button
            onClick={() => {
              setCategory("All");
              setFundingStage("All");
              setCountry("All");
            }}
            className="mt-4 text-xs font-bold text-rose-500 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      <div className="text-center text-xs text-gray-400 mt-2 font-semibold">
        Showing {filteredAndSortedCompanies.length} of{" "}
        {EXPLORE_COMPANIES.length} companies
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          disabled
          className="px-5 py-2.5 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
        >
          Previous
        </button>
        <button
          disabled
          className="px-5 py-2.5 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
        >
          Next
        </button>
      </div>
    </section>
  );
}
