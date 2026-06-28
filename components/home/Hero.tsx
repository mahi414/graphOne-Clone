"use client";

import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";

const tags = [
  "OpenAI",
  "Anthropic",
  "Cursor",
  "Perplexity",
  "Midjourney",
];

export default function Hero() {
  return (
    <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
      <div className="grid grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-red-600">
            Live AI Intelligence
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
          >
            Discover the Next
            <br />
            Generation of AI
            <br />
            Companies.
          </motion.h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Explore startups, investors, products, and trends shaping the AI
            ecosystem. Stay up to date with curated insights and discover what’s
            emerging next.
          </p>

          <div className="relative mt-8 max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search companies, founders, products..."
              className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-28 text-sm outline-none transition focus:border-red-400"
            />

            <button className="absolute right-2 top-2 flex h-10 items-center gap-2 rounded-xl bg-red-500 px-5 text-sm font-medium text-white transition hover:bg-red-600">
              Search
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700 transition hover:border-red-300 hover:text-red-600"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex h-[420px] items-center justify-center"
        >
          {/* Background glow */}
          <div className="absolute h-72 w-72 rounded-full bg-red-100 blur-3xl opacity-70" />

          {/* Central node */}
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-red-500 text-xl font-bold text-white shadow-xl">
            AI
          </div>

          {/* Floating nodes */}
          {[
            { name: "OpenAI", top: "8%", left: "50%" },
            { name: "Anthropic", top: "25%", left: "82%" },
            { name: "Perplexity", top: "72%", left: "80%" },
            { name: "Cursor", top: "82%", left: "28%" },
            { name: "Midjourney", top: "24%", left: "15%" },
          ].map((node) => (
            <motion.div
              key={node.name}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="absolute"
              style={{ top: node.top, left: node.left }}
            >
              <div className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-md">
                {node.name}
              </div>
            </motion.div>
          ))}

          {/* Connection lines */}
          <svg className="absolute inset-0 h-full w-full">
            <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#D1D5DB" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="82%" y2="28%" stroke="#D1D5DB" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="82%" y2="74%" stroke="#D1D5DB" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="28%" y2="84%" stroke="#D1D5DB" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="18%" y2="28%" stroke="#D1D5DB" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}