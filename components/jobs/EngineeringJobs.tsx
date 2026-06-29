"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const jobs = [
  {
    title: "Full-Stack Engineer (Boston)",
    company: "General Medicine",
    logo: "https://www.google.com/s2/favicons?domain=generalmedicine.com&sz=64",
    details: "Boston · $150K–$225K · today",
  },
  {
    title: "Staff Frontend Engineer",
    company: "Crealy",
    logo: "https://www.google.com/s2/favicons?domain=crealy.com&sz=64",
    details: "In-office · New York · $230K–$300K · today",
  },
  {
    title: "Senior Software Engineer (AI Agents)",
    company: "Traba",
    logo: "https://www.google.com/s2/favicons?domain=traba.co&sz=64",
    details: "New York · $200K–$240K · today",
  },
  {
    title: "Forward Deployed Engineer",
    company: "PermitFlow",
    logo: "https://www.google.com/s2/favicons?domain=permitflow.com&sz=64",
    details: "New York · $120K–$240K · today",
  },
  {
    title: "Senior Software Engineer",
    company: "Sardine",
    logo: "https://www.google.com/s2/favicons?domain=sardine.ai&sz=64",
    details: "Remote · United States · $170K–$170K · today",
  },
];

export default function EngineeringJobs() {
  return (
    <section className="mb-8">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-gray-900">
          Engineering Jobs
        </h2>

        <Link
          href="#"
          className="flex items-center gap-0.5 text-xs font-medium text-rose-500 hover:text-rose-600"
        >
          View all engineering jobs
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Jobs */}
      <div>
        {jobs.map((job) => (
          <div
            key={job.title}
            className="flex items-center justify-between border-b border-gray-100 py-3"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-1.5 shadow-sm">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={36}
                  height={36}
                  className="h-full w-full rounded object-contain"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  {job.title}
                </h4>

                <p className="text-xs text-gray-400">
                  {job.company} · {job.details}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex shrink-0 items-center gap-2">
              <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50">
                Save
              </button>

              <button className="rounded-lg bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-rose-600">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}