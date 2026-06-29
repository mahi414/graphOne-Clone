"use client";

import { ChevronRight } from "lucide-react";

const tags = [
  { name: "Large Language Models", count: 544 },
  { name: "AI Models", count: 83 },
  { name: "Open Source", count: 89 },
  { name: "Trending & Goals", count: 74 },
  { name: "AI Research", count: 61 },
  { name: "Generative AI", count: 86 },
  { name: "Multimodal", count: 43 },
  { name: "Machine Learning", count: 45 },
];

const startups = [
  {
    name: "OpenAI",
    description: "Leading AI safety & research company",
    logo: "https://www.google.com/s2/favicons?domain=openai.com&sz=32",
    href: "/companies/openai",
  },
  {
    name: "Anthropic",
    description: "AI safety focused research lab",
    logo: "https://www.google.com/s2/favicons?domain=anthropic.com&sz=32",
    href: "/companies/anthropic",
  },
  {
    name: "Midjourney",
    description: "AI-powered image generation platform",
    logo: "https://www.google.com/s2/favicons?domain=midjourney.com&sz=32",
    href: "/companies/midjourney",
  },
  {
    name: "Cursor",
    description: "AI-first code editor for developers",
    logo: "https://www.google.com/s2/favicons?domain=cursor.sh&sz=32",
    href: "/companies/cursor",
  },
];

export default function RightSidebar() {
  return (
    <aside className="hidden xl:block w-60 shrink-0 border-l border-gray-100 px-4 py-6 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto space-y-6">

      {/* Trending Tags */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-black text-gray-900">
            Trending Tags
          </h3>

          <a
            href="#"
            className="text-[11px] text-rose-500 hover:underline font-semibold"
          >
            View all
          </a>
        </div>

        <ul className="space-y-1.5">
          {tags.map((tag) => (
            <li
              key={tag.name}
              className="flex items-center justify-between group cursor-pointer"
            >
              <span className="text-sm text-gray-700 group-hover:text-rose-500 transition-colors truncate">
                {tag.name}
              </span>

              <span className="text-[11px] text-gray-400 ml-2 shrink-0">
                {tag.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Trending Startups */}
      <div className="border-t border-gray-100 pt-5">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-black text-gray-900">
              Trending Startups
            </h3>

            <a
              href="/companies"
              className="text-[11px] text-rose-500 hover:underline font-semibold"
            >
              View all
            </a>
          </div>

          <ul className="space-y-3">
            {startups.map((company) => (
              <li
                key={company.name}
                className="flex items-center gap-2"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-7 h-7 rounded-lg object-contain bg-gray-50 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-900 truncate">
                    {company.name}
                  </p>

                  <p className="text-[10px] text-gray-400 truncate">
                    {company.description}
                  </p>
                </div>

                <a
                  href={company.href}
                  className="shrink-0 w-6 h-6 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-white" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
            {/* Newsletter */}
      <div className="border-t border-gray-100 pt-5">
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">📧</span>

            <h3 className="text-sm font-black text-gray-900">
              Newsletter
            </h3>
          </div>

          <p className="text-[11px] text-gray-500 mb-3 leading-snug">
            Get the best news delivered by our robot, daily.
          </p>

          <input
            type="email"
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-xl px-3 py-1.5 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300 mb-2 bg-white"
          />

          <button className="w-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold py-1.5 rounded-xl transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Daily Digest */}
      <div className="border-t border-gray-100 pt-5">
        <div className="border border-gray-100 rounded-2xl p-4">
          <h3 className="text-sm font-black text-gray-900 mb-1">
            Daily Digest
          </h3>

          <p className="text-[11px] text-gray-500 mb-3 leading-snug">
            The daily summary of the AI news and updates.
          </p>

          <button className="w-full border border-rose-400 text-rose-500 hover:bg-rose-50 text-xs font-bold py-1.5 rounded-xl transition-colors">
            View Today's Digest
          </button>
        </div>
      </div>
    </aside>
  );
}