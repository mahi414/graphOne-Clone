import React from "react";
import { ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TrendingHeroes() {
  return (
    <section>
      <SectionHeader
        number="01"
        title="Trending AI Companies"
        subtitle="The most searched, viewed and discussed AI companies right now."
        href="/companies"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="relative rounded-2xl border bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 border-indigo-900/50 p-5 flex flex-col justify-between min-h-[250px] text-white shadow-lg overflow-hidden group">
            <div className="absolute right-4 bottom-4 w-20 h-20 opacity-80 pointer-events-none select-none">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full animate-[spin_10s_linear_infinite]"
              >
                <path
                  d="M50 10 L90 35 L90 75 L50 95 L10 75 L10 35 Z"
                  stroke="url(#cursorGlow)"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M50 20 L80 40 L80 70 L50 85 L20 70 L20 40 Z"
                  stroke="url(#cursorGlow)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="cursorGlow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="50%" stopColor="#c084fc" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest bg-rose-500/20 text-rose-400 px-2.5 py-0.5 rounded-full border border-rose-500/25">
                  Trending #1
                </span>
                <span className="text-[10px] text-white/40">
                  19.0K views (7d)
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shrink-0 shadow-inner">
                  <img
                    src="https://www.google.com/s2/favicons?domain=cursor.sh&sz=128"
                    alt="Cursor"
                    className="h-full w-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm leading-tight text-white group-hover:text-rose-400 transition-colors">
                    <a href="/companies/cursor">Cursor</a>
                  </h3>
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                    AI Coding
                  </p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-white/70 line-clamp-3 max-w-[85%]">
                The AI-first code editor built for developers.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-[10px] z-10">
              <span className="text-white/40">
                Valuation: <strong className="text-white">$1.5B</strong>
              </span>
              <span className="text-emerald-400 font-extrabold">
                Growth: +64%
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl border bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-slate-800/80 p-5 flex flex-col justify-between min-h-[250px] text-white shadow-lg overflow-hidden group">
            <div className="absolute right-4 bottom-4 w-20 h-20 opacity-80 pointer-events-none select-none">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full animate-[pulse_3s_ease-in-out_infinite]"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  stroke="url(#perpGlow)"
                  strokeWidth="3"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  stroke="url(#perpGlow)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <line
                  x1="15"
                  y1="50"
                  x2="85"
                  y2="50"
                  stroke="url(#perpGlow)"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
                <line
                  x1="50"
                  y1="15"
                  x2="50"
                  y2="85"
                  stroke="url(#perpGlow)"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
                <defs>
                  <linearGradient
                    id="perpGlow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest bg-rose-500/20 text-rose-400 px-2.5 py-0.5 rounded-full border border-rose-500/25">
                  Trending #2
                </span>
                <span className="text-[10px] text-white/40">
                  12.3K views (7d)
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shrink-0 shadow-inner">
                  <img
                    src="https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128"
                    alt="Perplexity"
                    className="h-full w-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm leading-tight text-white group-hover:text-rose-400 transition-colors">
                    <a href="/companies/perplexity">Perplexity</a>
                  </h3>
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                    AI Search
                  </p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-white/70 line-clamp-3 max-w-[85%]">
                AI search-engine for real-time answers.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-[10px] z-10">
              <span className="text-white/40">
                Valuation: <strong className="text-white">$2.0B</strong>
              </span>
              <span className="text-emerald-400 font-extrabold">
                Growth: +85%
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl border bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-slate-800/80 p-5 flex flex-col justify-between min-h-[250px] text-white shadow-lg overflow-hidden group">
            <div className="absolute right-4 bottom-4 w-20 h-20 opacity-80 pointer-events-none select-none">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <ellipse
                  cx="50"
                  cy="50"
                  rx="35"
                  ry="15"
                  stroke="url(#mjGlow)"
                  strokeWidth="2.5"
                  fill="none"
                  className="animate-[spin_8s_linear_infinite]"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="15"
                  ry="35"
                  stroke="url(#mjGlow)"
                  strokeWidth="2.5"
                  fill="none"
                  className="animate-[spin_12s_linear_infinite]"
                />
                <defs>
                  <linearGradient
                    id="mjGlow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest bg-rose-500/20 text-rose-400 px-2.5 py-0.5 rounded-full border border-rose-500/25">
                  Trending #3
                </span>
                <span className="text-[10px] text-white/40">
                  23.5K views (7d)
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shrink-0 shadow-inner">
                  <img
                    src="https://www.google.com/s2/favicons?domain=midjourney.com&sz=128"
                    alt="Midjourney"
                    className="h-full w-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm leading-tight text-white group-hover:text-rose-400 transition-colors">
                    <a href="/companies/midjourney">Midjourney</a>
                  </h3>
                  <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    AI Image
                  </p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-white/70 line-clamp-3 max-w-[85%]">
                Create stunning images from natural language.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-[10px] z-10">
              <span className="text-white/40">
                Valuation: <strong className="text-white">$10.0B</strong>
              </span>
              <span className="text-emerald-400 font-extrabold">
                Growth: +71%
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Small Cards */}
        <div className="lg:col-span-1 flex flex-col gap-3">
          <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 flex items-center justify-between gap-4 hover:border-rose-400 hover:shadow-md transition-all group">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-11 w-11 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-sm">
                <img
                  src="https://www.google.com/s2/favicons?domain=runwayml.com&sz=128"
                  alt="Runway"
                  className="h-full w-full object-contain rounded-md"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold text-gray-800 truncate group-hover:text-rose-600 transition-colors">
                  <a href="/companies/runway">Runway</a>
                </h4>
                <span className="text-[10px] text-gray-400 block mt-0.5">
                  AI Video
                </span>
                <span className="text-[10px] text-gray-400 font-medium">
                  7.3K views (7d)
                </span>
              </div>
            </div>
            <ChevronRight
              className="h-4 w-4 text-gray-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </div>
          <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 flex items-center justify-between gap-4 hover:border-rose-400 hover:shadow-md transition-all group">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-11 w-11 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-sm">
                <img
                  src="https://www.google.com/s2/favicons?domain=synthesia.io&sz=128"
                  alt="Synthesia"
                  className="h-full w-full object-contain rounded-md"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold text-gray-800 truncate group-hover:text-rose-600 transition-colors">
                  <a href="/companies/synthesia">Synthesia</a>
                </h4>
                <span className="text-[10px] text-gray-400 block mt-0.5">
                  AI Video
                </span>
                <span className="text-[10px] text-gray-400 font-medium">
                  6.1K views (7d)
                </span>
              </div>
            </div>
            <ChevronRight
              className="h-4 w-4 text-gray-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
