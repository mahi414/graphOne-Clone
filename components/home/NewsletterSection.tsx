"use client";

import React from "react";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-16 px-4 text-center mt-20 relative">
      <div className="max-w-xl mx-auto space-y-4">
        {/* Animated Badge */}
        <div className="flex items-center justify-center gap-1.5 text-xs font-black text-rose-500 uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-ping"></span>
          Be the first to discover what&apos;s next in AI
        </div>

        {/* Headline */}
        <h2 className="text-2xl font-black text-gray-900 leading-tight">
          Join thousands of builders, investors and researchers.
        </h2>

        {/* Subscribe Form */}
        <form
          className="flex items-center justify-center gap-2 pt-3 max-w-sm mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            // Add your subscribe logic here
          }}
        >
          <div className="relative flex-1">
            <Mail
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-gray-200 bg-white text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400 transition-all shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="h-11 px-6 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm shrink-0 flex items-center gap-1.5"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
