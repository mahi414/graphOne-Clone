"use client";

import { FcGoogle } from "react-icons/fc";

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block
  w-full lg:w-62 xl:w-70 max-h-screen
  border-l border-gray-100
  px-4 mx-auto py-2
  bg-white
  lg:sticky lg:top-14
  lg:h-[calc(90vh-3.5rem)]
  lg:overflow-y-auto
  overscroll-contain
  space-y-6 ">
      {/* Newsletter */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-3">
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Get new jobs in your inbox
          </h3>
          <p className="mt-0.5 text-xs text-gray-500">
            Join 50K+ professionals getting AI jobs handpicked daily.
          </p>
        </div>

        <input
          type="email"
          placeholder="Your email address"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
        />

        <button className="w-full rounded-lg bg-rose-500 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-600">
          Sign up
        </button>

        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
          <FcGoogle className="h-4 w-4" />
          Sign up with Google
        </button>

        <p className="text-center text-xs text-gray-400">
          No spam. Unsubscribe anytime.
        </p>
      </div>

      {/* Features */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-3">
        <h3 className="text-sm font-bold text-gray-900">
          Level up your job search
        </h3>

        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-xs text-gray-600">
            <span className="shrink-0">🔍</span>
            <span>Unique jobs in niche industries</span>
          </li>

          <li className="flex items-start gap-2 text-xs text-gray-600">
            <span className="shrink-0">💰</span>
            <span>Set salary & equity upfront</span>
          </li>

          <li className="flex items-start gap-2 text-xs text-gray-600">
            <span className="shrink-0">🎯</span>
            <span>Personalized job filters</span>
          </li>

          <li className="flex items-start gap-2 text-xs text-gray-600">
            <span className="shrink-0">⭐</span>
            <span>Showcase skills beyond a resume</span>
          </li>

          <li className="flex items-start gap-2 text-xs text-gray-600">
            <span className="shrink-0">🤝</span>
            <span>Let founders and recruiters reach out to you</span>
          </li>
        </ul>

        <button className="w-full rounded-lg border border-gray-200 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
          Sign up & search
        </button>
      </div>

      {/* Salary */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-3">
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Know your worth
          </h3>

          <p className="mt-0.5 text-xs text-gray-500">
            Know your worth. Filter by industry, job title, location & more.
          </p>
        </div>

        <button className="w-full rounded-lg border border-gray-200 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
          Salary calculator
        </button>
      </div>

      {/* Job Alert */}
      <div className="rounded-xl bg-rose-500 p-4 space-y-3">
        <div>
          <h3 className="text-sm font-bold text-white">
            Never miss the right opportunity
          </h3>

          <p className="mt-0.5 text-xs text-rose-100">
            Get notified when new AI jobs match your interests and skills.
          </p>
        </div>

        <button className="w-full rounded-lg bg-white py-2 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50">
          Create job alert
        </button>
      </div>
    </aside>
  );
}