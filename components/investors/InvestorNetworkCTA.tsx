"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function InvestorNetworkCTA() {
  return (
    <section className="py-12 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Left content */}
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs font-black text-gray-200 select-none">
              11
            </span>

            <h2 className="text-xl font-black text-gray-900">
              Join the GraphOne Investor Network
            </h2>
          </div>

          <p className="text-sm text-gray-500 ml-5">
            Unlock better opportunities. Build what&apos;s next.
          </p>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/auth/login"
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Log in
          </Link>

          <Link
            href="/auth/signup"
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 transition-colors text-white text-sm font-semibold shadow-sm"
          >
            Sign up for free
          </Link>
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="h-8" />
    </section>
  );
}