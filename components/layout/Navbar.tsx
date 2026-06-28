"use client";

import React from "react";
import { Search, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  // Define navigation links
  const navLinks = [
    { name: "Companies", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Investors", href: "/investors" },
    { name: "Funding", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "News", href: "/news" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
        {/* Left Section: Logo & Navigation */}
        <div className="flex items-center gap-6 shrink-0">
          <Link className="flex items-center" href="/">
            <span className="text-lg font-black tracking-tight text-gray-900 flex items-center gap-0.5">
              graph<span className="text-rose-500">ONE</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              // 1. Check if we are on the default home route ("/")
              const isHome = pathname === "/";

              // 2. If on home, highlight both "Companies" and "Funding"
              const isDefaultActive =
                isHome &&
                (link.name === "Companies" || link.name === "Funding");

              // 3. Otherwise, strictly match the exact route
              const isExactMatch = pathname === link.href;

              // 4. Determine final active state
              const isActive = isDefaultActive || isExactMatch;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-rose-500 border-b-2 border-rose-500 rounded-none pb-[5px]"
                      : "rounded-md text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Section: Search & Actions */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          {/* Search Bar */}
          <div className="relative hidden md:block w-64 xl:w-80">
            <Search
              className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search companies, founders, products..."
              className="w-full h-8 pl-9 pr-8 rounded-full border border-gray-200 bg-gray-50 text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30 focus:border-rose-400 transition-all"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-4 select-none items-center rounded border border-gray-200 bg-white px-1 font-mono text-[9px] font-medium text-gray-400">
              /
            </kbd>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Log in
            </button>
            <button className="px-4 py-1.5 text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 rounded-lg transition-colors shadow-sm">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
