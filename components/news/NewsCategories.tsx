"use client";

import { useState } from "react";
import { ChevronDown, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  "All News",
  "AI Models",
  "AI Tools",
  "Funding",
  "Research",
  "Datasets",
];

export default function NewsCategories() {
  const [active, setActive] = useState("All News");

  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-2 md:flex-row md:items-center md:justify-between">
      {/* Categories */}
      <div className="flex overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`relative shrink-0 px-4 py-3 text-sm font-semibold transition-colors ${
              active === category
                ? "text-rose-500"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {category}

            {active === category && (
              <motion.div
                layoutId="active-tab"
                className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-rose-500"
              />
            )}
          </button>
        ))}
      </div>

      {/* Filter Button */}
      <button className="flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:shadow-sm">
        <TrendingUp size={16} className="text-gray-500" />

        Trending Now

        <ChevronDown
          size={16}
          className="text-gray-500 transition-transform"
        />
      </button>
    </div>
  );
}