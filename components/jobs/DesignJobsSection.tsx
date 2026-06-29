"use client";

import Image from "next/image";
import Link from "next/link";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  posted: string;
  logo: string;
};

const jobs: Job[] = [
  {
    id: "1",
    title: "Founding Designer — AI-Native Consumer Experience",
    company: "Product.ai",
    location: "Los Angeles",
    salary: "$200K–$300K",
    posted: "1 week ago",
    logo: "https://www.google.com/s2/favicons?domain=product.ai&sz=64",
  },
  {
    id: "2",
    title: "Founding Designer",
    company: "kola",
    location: "Remote · Canada",
    salary: "$150K–$200K",
    posted: "2 weeks ago",
    logo: "https://www.google.com/s2/favicons?domain=kola.ai&sz=64",
  },
];

export default function DesignJobsSection() {
  return (
    <section className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-gray-900">Design Jobs</h2>

        <Link
          href="#"
          className="text-xs text-rose-500 hover:text-rose-600 font-medium flex items-center gap-1"
        >
          View all design jobs
          <span className="text-sm">›</span>
        </Link>
      </div>

      {/* Jobs list */}
      <div className="rounded-lg border border-gray-100 bg-white overflow-hidden">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 border-b last:border-b-0 border-gray-100"
          >
            {/* Left */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-10 w-10 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shrink-0 shadow-sm">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={40}
                  height={40}
                  className="rounded object-contain"
                />
              </div>

              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 truncate">
                  {job.title}
                </h4>
                <p className="text-xs text-gray-400 truncate">
                  {job.company} · {job.location} · {job.salary} · {job.posted}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 sm:ml-auto">
              <button className="px-3 py-1.5 text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                Save
              </button>

              <button className="px-3 py-1.5 text-xs font-semibold text-white bg-rose-500 rounded-lg hover:bg-rose-600 transition">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}