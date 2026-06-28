import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle: string;
  href?: string;
}

export function SectionHeader({
  number,
  title,
  subtitle,
  href,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-4">
      <div className="flex items-baseline gap-2.5">
        <span className="text-4xl font-black text-gray-100 select-none">
          {number}
        </span>
        <div>
          <h2 className="text-xl font-black text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
        </div>
      </div>
      {href && (
        <Link
          href={href}
          className="text-xs font-bold text-rose-500 hover:underline flex items-center gap-1 shrink-0"
        >
          View all <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
