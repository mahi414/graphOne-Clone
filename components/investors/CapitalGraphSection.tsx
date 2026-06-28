"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  { icon: "💼", label: "Investor" },
  { icon: "👤", label: "Founder" },
  { icon: "🏢", label: "Company" },
  { icon: "💰", label: "Funding Round" },
  { icon: "🚀", label: "Product" },
];

export default function CapitalGraphSection() {
  return (
    <section className="py-12 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-950 rounded-3xl p-10 text-center text-white"
      >
        {/* Step number */}
        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-3">
          10
        </p>

        {/* Title */}
        <h2 className="text-3xl font-black text-white mb-2">
          Explore the Capital Graph
        </h2>

        <p className="text-gray-400 text-base mb-10 max-w-md mx-auto">
          Visualize How Capital Moves in the AI Economy
        </p>

        {/* Flow */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {step.label}
                </span>
              </motion.div>

              {/* Arrow (except last item) */}
              {i !== steps.length - 1 && (
                <div className="flex items-center text-gray-700 mb-5">
                  <div className="w-6 h-px bg-gray-700" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-gray-700 -ml-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/graph"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose-600 hover:bg-rose-700 transition-colors text-white font-bold rounded-xl text-sm shadow-lg shadow-rose-900/30"
        >
          Explore Capital Graph
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}