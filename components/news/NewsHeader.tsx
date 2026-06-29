"use client";

import { motion } from "framer-motion";

export default function NewsHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      {/* Live Badge */}
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-rose-600">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
          </span>

          LIVE AI INTELLIGENCE
        </span>
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
      >
        Trending AI News
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base"
      >
        Real-time updates on breakthroughs, product launches, research papers,
        and trends shaping the future of Artificial Intelligence.
      </motion.p>
    </motion.section>
  );
}