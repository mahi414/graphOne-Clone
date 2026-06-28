"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Top AI Coding Assistants",
    description:
      "Explore the most popular developer-focused AI tools used for coding, debugging, and productivity.",
    products: 24,
    color: "from-violet-500 to-indigo-600",
  },
  {
    title: "AI Video Generation",
    description:
      "Discover the latest generation of video creation platforms powered by generative AI.",
    products: 18,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Productivity AI",
    description:
      "Boost your workflow with assistants for writing, meetings, research, and automation.",
    products: 31,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Collections() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Featured Collections
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Curated lists of the best AI products.
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700">
          View all
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {collections.map((item, index) => (
          <motion.div
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{
              duration: 0.2,
            }}
            key={index}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
          >
            <div
              className={`h-40 bg-gradient-to-br ${item.color} relative`}
            >
              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur">
                  {item.products} Products
                </span>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-7 text-gray-600">
                {item.description}
              </p>

              <button className="mt-6 flex items-center gap-2 font-medium text-red-600">
                Explore Collection

                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}