"use client";

import { MapPin, Search } from "lucide-react";

export default function JobsHeader() {
  return (
    <section className="mb-8">
      {/* Top Label */}
      <div className="inline-flex items-center gap-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-gray-500">
        <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
        Live AI Intelligence
      </div>

      {/* Heading */}
      <h1 className="mb-2 text-4xl font-black leading-tight text-gray-900">
        Find what's <span className="text-rose-500">next.</span>
      </h1>

      {/* Subtitle */}
      <p className="mb-6 text-base text-gray-500">
        Discover the best AI startups and find your next career opportunity.
      </p>

      {/* Search */}
      <div className="flex overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
        {/* Search */}
        <div className="flex flex-1 items-center gap-2 border-r border-gray-200 px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-gray-400" />
          <input
            type="text"
            placeholder="Job title, company, or keyword"
            className="flex-1 bg-transparent text-sm placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Location */}
        <div className="flex flex-1 items-center gap-2 border-r border-gray-200 px-4 py-3">
          <MapPin className="h-4 w-4 shrink-0 text-gray-400" />
          <input
            type="text"
            placeholder="City, state, or remote"
            className="flex-1 bg-transparent text-sm placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Button */}
        <button className="shrink-0 bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-600">
          Search
        </button>
      </div>
    </section>
  );
}