"use client";

import {
  ArrowUpRight,
  Flame,
  Newspaper,
  Mail,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const trending = [
  "OpenAI GPT-5",
  "AI Coding",
  "Video Generation",
  "AI Agents",
  "Reasoning Models",
];

const news = [
  {
    title: "New multimodal model released",
    time: "2 hours ago",
  },
  {
    title: "Funding reaches record highs",
    time: "Today",
  },
  {
    title: "AI chips continue rapid growth",
    time: "Yesterday",
  },
];

export default function RightSidebar() {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Product of the Week */}
      <motion.div
        whileHover={{ y: -4 }}
        className="rounded-3xl border border-gray-200 bg-gradient-to-br from-red-500 to-orange-500 p-6 text-white shadow-sm"
      >
        <span className="text-xs font-semibold uppercase tracking-widest opacity-90">
          Product of the Week
        </span>

        <div className="mt-5 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur">
            🤖
          </div>

          <div>
            <h3 className="text-xl font-bold">
              AI Workspace
            </h3>

            <p className="text-sm opacity-90">
              Productivity Suite
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 opacity-90">
          One place to chat, write, search, automate, and collaborate with AI.
        </p>

        <button className="mt-6 flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-medium text-red-600 transition hover:bg-gray-100">
          Explore
          <ArrowUpRight size={16} />
        </button>
      </motion.div>

      {/* Trending */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <Flame className="text-orange-500" size={18} />
          <h3 className="font-semibold">Trending Searches</h3>
        </div>

        <div className="space-y-3">
          {trending.map((item, index) => (
            <button
              key={item}
              className="flex w-full items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-sm transition hover:bg-red-50 hover:text-red-600"
            >
              <span>{item}</span>

              <span className="text-xs text-gray-400">
                #{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Latest News */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <Newspaper size={18} />
          <h3 className="font-semibold">
            Latest AI News
          </h3>
        </div>

        <div className="space-y-5">
          {news.map((item) => (
            <div
              key={item.title}
              className="border-b border-gray-100 pb-4 last:border-none"
            >
              <p className="font-medium leading-6">
                {item.title}
              </p>

              <span className="text-xs text-gray-500">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2">
          <Mail size={18} />
          <h3 className="font-semibold">
            Weekly Newsletter
          </h3>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          Receive AI product launches, startup funding updates, and investor insights every week.
        </p>

        <input
          placeholder="Email address"
          className="mt-5 h-11 w-full rounded-xl border border-gray-200 px-4 outline-none focus:border-red-400"
        />

        <button className="mt-4 w-full rounded-xl bg-red-500 py-3 font-medium text-white transition hover:bg-red-600">
          Subscribe
        </button>
      </div>

      {/* Market Snapshot */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <TrendingUp className="text-green-500" size={18} />
          <h3 className="font-semibold">Market Snapshot</h3>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">AI Companies</span>
            <span className="font-semibold">18,240</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Investors</span>
            <span className="font-semibold">3,125</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Products</span>
            <span className="font-semibold">7,890</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Funding</span>
            <span className="font-semibold">$142B</span>
          </div>
        </div>
      </div>
    </div>
  );
}