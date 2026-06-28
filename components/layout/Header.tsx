"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div className="relative w-[420px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          placeholder="Search companies, products..."
          className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none focus:border-red-400"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="rounded-xl border border-gray-200 p-3 hover:bg-gray-50">
          <Bell size={18} />
        </button>

        <img
          src="https://i.pravatar.cc/100"
          className="h-11 w-11 rounded-full"
          alt=""
        />
      </div>
    </header>
  );
}