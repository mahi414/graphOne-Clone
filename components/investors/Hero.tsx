"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

const investors = [
  {
    name: "a16z",
    short: "a16z",
    color: "bg-black",
    top: "10%",
    left: "58%",
  },
  {
    name: "Sequoia",
    short: "SEQ",
    color: "bg-green-600",
    top: "28%",
    left: "74%",
  },
  {
    name: "Lightspeed",
    short: "LS",
    color: "bg-orange-500",
    top: "55%",
    left: "62%",
  },
  {
    name: "General Catalyst",
    short: "GC",
    color: "bg-teal-600",
    top: "70%",
    left: "78%",
  },
  {
    name: "Accel",
    short: "ACC",
    color: "bg-blue-700",
    top: "12%",
    left: "82%",
  },
  {
    name: "Khosla Ventures",
    short: "KV",
    color: "bg-purple-700",
    top: "42%",
    left: "87%",
  },
];

const tags = [
  "AI Agents",
  "Seed Investors",
  "Series A",
  "YC Backers",
  "India",
  "OpenAI Portfolio",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16">
  <div className="container mx-auto flex items-center px-6">
    {/* Left Side */}
    <motion.div
      className="z-10 flex-1 max-w-xl"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={fadeUp}
        className="mb-5 text-5xl font-black leading-tight text-gray-900"
      >
        Discover Investors Building the AI Economy
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mb-8 max-w-md text-base leading-relaxed text-gray-500"
      >
        Find VCs, angels, operators, corporate funds and emerging managers
        backing the next generation of AI companies.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mb-5 flex items-center gap-2"
      >
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search investors, funds, firms..."
            className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 text-sm shadow-sm outline-none focus:border-transparent focus:ring-2 focus:ring-rose-500"
          />
        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="flex h-11 items-center gap-2 rounded-xl bg-rose-600 px-5 text-sm font-semibold text-white shadow-sm"
        >
          <Search size={16} />
          Search
        </motion.button>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center gap-2"
      >
        <span className="text-xs font-medium text-gray-400">
          Popular searches:
        </span>

        {tags.map((tag, index) => (
          <motion.button
            key={tag}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5 + index * 0.08,
            }}
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
            className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600"
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>

    {/* Right Side */}
    <div className="relative ml-8 hidden h-80 flex-1 lg:block">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 320"
        fill="none"
      >
        <line
          x1="80"
          y1="50"
          x2="160"
          y2="105"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="160"
          y1="105"
          x2="230"
          y2="175"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="230"
          y1="175"
          x2="160"
          y2="225"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="300"
          y1="50"
          x2="230"
          y2="105"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="300"
          y1="135"
          x2="230"
          y2="175"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {[80, 160, 230, 300, 300].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={[50, 105, 175, 50, 135][i]}
            r="3"
            fill="#e5e7eb"
          />
        ))}
      </svg>

      {investors.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3 + index * 0.15,
          }}
          whileHover={{
            scale: 1.08,
            y: -6,
          }}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
          }}
        >
          <div className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-md">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white ${item.color}`}
            >
              {item.short}
            </div>

            <span className="whitespace-nowrap text-xs font-semibold text-gray-800">
              {item.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}