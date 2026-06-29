"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Users, Briefcase, ChevronRight } from "lucide-react";

const companies = [
  {
    name: "OpenAI",
    logo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    employees: "15,000+",
    jobs: "84 jobs",
    stage: "Private",
  },
  {
    name: "Anthropic",
    logo: "https://www.google.com/s2/favicons?domain=anthropic.com&sz=128",
    employees: "1,200+",
    jobs: "51 jobs",
    stage: "Series B",
  },
  {
    name: "Cursor",
    logo: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128",
    employees: "65+",
    jobs: "28 jobs",
    stage: "Series A",
  },
  {
    name: "Mistral AI",
    logo: "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
    employees: "250+",
    jobs: "20 jobs",
    stage: "Series B",
  },
];

export default function TrendingCompanies() {
  return (
    <section className="mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-900">
          Trending startups hiring now
        </h2>

        <Link
          href="/companies"
          className="flex items-center gap-0.5 text-xs font-medium text-rose-500 hover:text-rose-600"
        >
          View all companies
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {companies.map((company) => (
          <Link
            key={company.name}
            href="#"
            className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-md"
          >
            {/* Logo */}
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-2 shadow-sm">
              <Image
                src={company.logo}
                alt={company.name}
                width={56}
                height={56}
                className="h-full w-full rounded-md object-contain"
              />
            </div>

            {/* Name */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-sm font-bold text-gray-900">
                {company.name}
              </span>

              <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-rose-500">
                <Check className="h-3 w-3" />
                verified
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {company.employees}
              </span>

              <span className="flex items-center gap-1">
                <Briefcase className="h-3 w-3" />
                {company.jobs}
              </span>

              <span className="flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-300" />
                {company.stage}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}