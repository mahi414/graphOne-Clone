"use client";

import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";
import { motion } from "framer-motion";

type InvestorType = {
  title: string;
  count: string;
  color: string;
  iconBg: string;
  iconColor: string;
  href: string;
};

const investorTypes: InvestorType[] = [
  {
    title: "Seed Investors",
    count: "1,095 investors",
    color: "border-green-100 bg-green-50",
    iconBg: "bg-white border-green-100",
    iconColor: "text-green-600",
    href: "/investors/seed",
  },
  {
    title: "Series A Investors",
    count: "381 investors",
    color: "border-blue-100 bg-blue-50",
    iconBg: "bg-white border-blue-100",
    iconColor: "text-blue-600",
    href: "/investors/series-a",
  },
  {
    title: "Angel Investors",
    count: "2,754 investors",
    color: "border-yellow-100 bg-yellow-50",
    iconBg: "bg-white border-yellow-100",
    iconColor: "text-yellow-600",
    href: "/investors/angel",
  },
  {
    title: "Corporate Venture",
    count: "437 investors",
    color: "border-purple-100 bg-purple-50",
    iconBg: "bg-white border-purple-100",
    iconColor: "text-purple-600",
    href: "/investors/corporate",
  },
  {
    title: "Late Stage Investors",
    count: "409 investors",
    color: "border-orange-100 bg-orange-50",
    iconBg: "bg-white border-orange-100",
    iconColor: "text-orange-600",
    href: "/investors/late-stage",
  },
  {
    title: "Family Offices",
    count: "208 investors",
    color: "border-gray-100 bg-gray-50",
    iconBg: "bg-white border-gray-100",
    iconColor: "text-gray-600",
    href: "/investors/family-office",
  },
];

export default function BrowseInvestorType() {
  return (
    <section className="border-t border-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-baseline gap-3"
        >
          <span className="select-none text-4xl font-black text-gray-100">
            03
          </span>

          <h2 className="text-2xl font-black text-gray-900">
            Browse by Investor Type
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {investorTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >
              <Link
                href={type.href}
                className={`group flex items-center gap-4 rounded-2xl border p-4 text-left shadow-sm transition-all hover:shadow-md ${type.color}`}
              >
                <motion.div
                  whileHover={{
                    rotate: 12,
                    scale: 1.12,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border ${type.iconBg}`}
                >
                  <Users className={`h-5 w-5 ${type.iconColor}`} />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-800">
                    {type.title}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {type.count}
                  </p>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-600" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}