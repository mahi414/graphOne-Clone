import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-100 bg-white py-6 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Section: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="text-sm font-black tracking-tight text-gray-900 flex items-center gap-0.5">
              graph<span className="text-rose-500">ONE</span>
            </div>
            <p className="text-[10px] text-gray-400">
              © {currentYear} GraphOne. All rights reserved.
            </p>
          </div>

          {/* Right Section: Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] text-gray-400">
            <Link href="#" className="hover:text-gray-700 transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Advertise
            </Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              API
            </Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Newsletter
            </Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Blog
            </Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
