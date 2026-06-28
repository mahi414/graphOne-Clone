import React from "react";
import {
  Search,
  Cpu,
  Zap,
  Play,
  Mic,
  Database,
  ChevronDown,
  Layers,
} from "lucide-react";
import Image from "next/image";

// 1. Data arrays for easy maintenance
const CATEGORIES = [
  { label: "AI Agents", Icon: Cpu, color: "text-purple-500" },
  { label: "AI Coding", Icon: Zap, color: "text-amber-500" },
  { label: "AI Search", Icon: Search, color: "text-blue-500" },
  { label: "AI Video", Icon: Play, color: "text-rose-500" },
  { label: "AI Voice", Icon: Mic, color: "text-emerald-500" },
  { label: "AI Infrastructure", Icon: Database, color: "text-indigo-500" },
];

const ORBIT_ICONS = [
  { name: "openai", domain: "openai.com", top: "10%", left: "15%" },
  { name: "anthropic", domain: "anthropic.com", top: "25%", left: "80%" },
  { name: "cursor", domain: "cursor.sh", top: "75%", left: "75%" },
  { name: "midjourney", domain: "midjourney.com", top: "78%", left: "20%" },
  { name: "perplexity", domain: "perplexity.ai", top: "45%", left: "5%" },
];

export function Hero() {
  return (
    <section className="relative border-b border-gray-100 bg-white overflow-hidden py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-12">
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="flex-1 max-w-2xl z-10">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-[10px] font-black uppercase tracking-widest text-rose-600 mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
              LIVE AI INTELLIGENCE
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-[1.1] mb-5">
              Discover the world's
              <br />
              most innovative
              <br />
              <span className="text-rose-500">AI companies</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-md">
              Explore AI startups, unicorns, frontier labs, and emerging
              companies shaping the future of artificial intelligence.
            </p>

            {/* Search Bar */}
            <div className="flex items-center gap-2 mb-6 max-w-lg">
              <div className="relative flex-1">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  placeholder="Search companies, categories, founders, investors..."
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400 transition-all shadow-sm"
                  type="text"
                  defaultValue=""
                />
              </div>
              <button className="h-12 px-6 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-xl flex items-center gap-2 transition-colors shadow-sm">
                <Search className="h-4 w-4" aria-hidden="true" />
                Search
              </button>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map(({ label, Icon, color }) => (
                <button
                  key={label}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white text-[11px] font-semibold text-gray-600 hover:border-rose-400 hover:text-rose-600 hover:bg-rose-50 transition-all shadow-sm"
                >
                  <Icon className={`h-3.5 w-3.5 ${color}`} aria-hidden="true" />
                  {label}
                </button>
              ))}
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-[11px] font-semibold text-gray-600 hover:border-gray-300 transition-all shadow-sm">
                More <ChevronDown className="h-3 w-3" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: ORBITS GRAPHIC --- */}
          <div className="hidden lg:block relative w-80 h-80 shrink-0">
            {/* Dashed Rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-gray-100 animate-[spin_50s_linear_infinite]"></div>
            <div className="absolute inset-8 rounded-full border border-dashed border-gray-200/80 animate-[spin_30s_linear_infinite_reverse]"></div>

            {/* Center Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-16 w-16 bg-rose-500 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white">
              <Layers strokeWidth={2.5} className="h-7 w-7 text-white" />
            </div>

            {/* Orbiting Icons */}
            {ORBIT_ICONS.map(({ name, domain, top, left }) => (
              <div key={name} className="absolute z-20" style={{ top, left }}>
                <div className="h-10 w-10 rounded-xl bg-white border border-gray-200 shadow-md p-1.5 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Image
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain rounded-md"
                  />
                </div>
              </div>
            ))}

            {/* Decorative Stars */}
            <div className="absolute top-[8%] left-[78%] text-rose-300 animate-pulse">
              ✦
            </div>
            <div className="absolute bottom-[20%] left-[8%] text-purple-300 animate-pulse">
              ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
