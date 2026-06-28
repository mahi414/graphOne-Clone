"use client";

import { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";
const TABS = [
  "All",
  "Chat",
  "Code",
  "Agents",
  "Image",
  "Video",
  "Voice",
  "Productivity",
  "More",
];

export default function CategoryTabs() {
  const [active, setActive] = useState("All");

  return (
    <div className="px-3 sm:px-6 border-b border-gray-100 bg-white">
      <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar py-1 sm:py-0">
        {TABS.map((tab) => {
          const isActive = active === tab;

          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={[
                "flex items-center gap-1 shrink-0 transition-all border-b-2",
                "px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold",
                "rounded-t-lg",
                isActive
                  ? "border-rose-500 text-rose-500"
                  : "border-transparent text-gray-500 hover:text-gray-900",
              ].join(" ")}
            >
              <span>{tab}</span>

              {tab === "More" && (
                <ChevronDownIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- ICON ---------------- */

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}