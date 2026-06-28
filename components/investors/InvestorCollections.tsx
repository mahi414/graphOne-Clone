"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Collection = {
  title: string;
  count: string;
  emoji: string;
  gradient: string;
  href: string;
};

const collections: Collection[] = [
  {
    title: "Investors Backing AI Agents",
    count: "96 Investors",
    emoji: "🤖",
    gradient: "from-blue-900 to-blue-800",
    href: "/investors/collections/ai-agents",
  },
  {
    title: "Investors Backing Indian AI Startups",
    count: "94 Investors",
    emoji: "🇮🇳",
    gradient: "from-amber-800 to-yellow-700",
    href: "/investors/collections/india",
  },
  {
    title: "Top Seed Investors",
    count: "244 Investors",
    emoji: "🌱",
    gradient: "from-green-800 to-emerald-700",
    href: "/investors/collections/seed",
  },
  {
    title: "Operator Angels",
    count: "178 Investors",
    emoji: "👤",
    gradient: "from-gray-800 to-slate-700",
    href: "/investors/collections/operator-angels",
  },
  {
    title: "OpenAI Alumni Investors",
    count: "64 Investors",
    emoji: "⚡",
    gradient: "from-gray-900 to-gray-800",
    href: "/investors/collections/openai",
  },
  {
    title: "Enterprise AI Investors",
    count: "82 Investors",
    emoji: "🏢",
    gradient: "from-blue-800 to-indigo-800",
    href: "/investors/collections/enterprise-ai",
  },
  {
    title: "Developer Tool Specialists",
    count: "86 Investors",
    emoji: "⚙️",
    gradient: "from-slate-700 to-gray-700",
    href: "/investors/collections/developer-tools",
  },
  {
    title: "Healthcare AI Investors",
    count: "98 Investors",
    emoji: "🏥",
    gradient: "from-teal-800 to-cyan-800",
    href: "/investors/collections/healthcare-ai",
  },
];

export default function InvestorCollections() {
  return (
  <section className="border-t border-gray-100 py-10 md:py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 md:mb-8 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between"
      >
        <div className="flex items-baseline gap-2 sm:gap-3">
          <span className="select-none text-3xl sm:text-4xl font-black text-gray-100">
            02
          </span>

          <h2 className="text-xl sm:text-2xl font-black text-gray-900">
            Investor Collections
          </h2>
        </div>

        <motion.div whileHover={{ x: 5 }} className="self-start sm:self-auto">
          <Link
            href="/investors/collections"
            className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-rose-600"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <Link
              href={collection.href}
              className={`min-h-[110px] sm:min-h-[120px] rounded-2xl bg-gradient-to-br ${collection.gradient} p-4 sm:p-5 flex flex-col justify-between shadow-lg`}
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl sm:text-3xl"
              >
                {collection.emoji}
              </motion.div>

              <div>
                <h3 className="mb-1 text-xs sm:text-sm font-bold leading-snug text-white">
                  {collection.title}
                </h3>

                <p className="text-[10px] sm:text-xs text-white/60">
                  {collection.count}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
  );
}