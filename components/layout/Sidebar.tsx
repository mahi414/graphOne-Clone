"use client";

import {
  LayoutGrid,
  Building2,
  Users,
  Boxes,
  TrendingUp,
  Newspaper,
  Plus,
} from "lucide-react";

const items = [
  { icon: LayoutGrid, title: "Dashboard", active: true },
  { icon: Building2, title: "Companies" },
  { icon: Boxes, title: "Products" },
  { icon: Users, title: "Investors" },
  { icon: TrendingUp, title: "Trending" },
  { icon: Newspaper, title: "News" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[240px] flex-col border-r border-gray-200 bg-white">
      <div className="border-b border-gray-100 px-8 py-7">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-red-500 text-white flex items-center justify-center font-bold">
            G
          </div>

          <div>
            <h2 className="text-xl font-bold">AI Graph</h2>
            <p className="text-xs text-gray-500">
              Intelligence Platform
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all ${
                item.active
                  ? "bg-red-50 text-red-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {item.title}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-gray-100 p-5">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 text-white transition hover:bg-red-600">
          <Plus size={18} />
          Submit
        </button>
      </div>
    </aside>
  );
}