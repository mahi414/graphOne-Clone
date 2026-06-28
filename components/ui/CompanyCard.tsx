"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CompanyCardProps {
  name: string;
  domain: string;
  category: string;
  description: string;
  valuation: string;
  growth: string;
  viewMode?: "grid" | "list";
}

export function CompanyCard({
  name,
  domain,
  category,
  description,
  valuation,
  growth,
  viewMode = "grid",
}: CompanyCardProps) {
  const [imgSrc, setImgSrc] = useState(
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  );

  const fallbackSrc =
    "https://www.google.com/s2/favicons?domain=characterx.ai&sz=128";

  // --- LIST VIEW ---
  if (viewMode === "list") {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-4 hover:border-rose-400 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm group">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="h-10 w-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-sm">
            <Image
              src={imgSrc}
              alt={name}
              width={40}
              height={40}
              className="h-full w-full object-contain rounded-md"
              onError={() => setImgSrc(fallbackSrc)}
            />
          </div>
          <div className="w-40 shrink-0">
            <h3 className="text-xs font-black text-gray-800 group-hover:text-rose-500 transition-colors truncate">
              <a
                href={`/companies/${name.toLowerCase().replace(/[\s.]+/g, "-")}`}
              >
                {name}
              </a>
            </h3>
            <span className="text-[10px] text-gray-400 font-bold block mt-0.5">
              {category}
            </span>
          </div>
          <p className="hidden md:block text-[11px] text-gray-500 line-clamp-1 flex-1 pr-4">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-6 text-[10px] font-bold shrink-0 pt-3 sm:pt-0 border-t sm:border-0 border-gray-100">
          <span className="text-gray-400 w-24">
            Valuation: <strong className="text-gray-700">{valuation}</strong>
          </span>
          <span className="text-emerald-500 w-12 text-right">{growth}</span>
        </div>
      </div>
    );
  }

  // --- GRID VIEW (Default) ---
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between min-h-[180px] shadow-sm group">
      <div>
        <div className="flex items-center gap-3.5 mb-3.5">
          <div className="h-10 w-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-sm">
            <Image
              src={imgSrc}
              alt={name}
              width={40}
              height={40}
              className="h-full w-full object-contain rounded-md"
              onError={() => setImgSrc(fallbackSrc)}
            />
          </div>
          <div>
            <h3 className="text-xs font-black text-gray-800 group-hover:text-rose-500 transition-colors">
              <a
                href={`/companies/${name.toLowerCase().replace(/[\s.]+/g, "-")}`}
              >
                {name}
              </a>
            </h3>
            <span className="text-[10px] text-gray-400 font-bold block mt-0.5">
              {category}
            </span>
          </div>
        </div>
        <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-4 text-[10px] font-bold">
        <span className="text-gray-400">
          Valuation: <strong className="text-gray-700">{valuation}</strong>
        </span>
        <span className="text-emerald-500">{growth}</span>
      </div>
    </div>
  );
}
