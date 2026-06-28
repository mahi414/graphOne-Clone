import React from "react";
import { TrendingHeroes } from "./TrendingHeroes";
import { GrowthAndEmerging } from "./GrowthAndEmerging";
import { CategoriesAndLists } from "./CategoriesAndLists";
import { ExploreGrid } from "./ExploreGrid";
import { NewsletterSection } from "./NewsletterSection";

export function TrendingSection() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* 01. Top Trending Cards (Cursor, Perplexity, etc.) */}
        <TrendingHeroes />

        {/* 02 & 03. Fastest Growing & Emerging Startups */}
        <GrowthAndEmerging />

        {/* 04 - 12. Categories, Unicorns, Labs, Open Source */}
        <CategoriesAndLists />

        {/* 13. Explore All Grid */}
        <ExploreGrid />
      </div>

      {/* 14. Newsletter Footer (Outside the max-w container so its gray background stretches full-width) */}
      <NewsletterSection />
    </>
  );
}
