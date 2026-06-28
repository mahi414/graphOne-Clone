"use client";

import { useState } from "react";

type Product = {
  name: string;
  domain: string;
  category: string;
  description: string;
  badge?: string;
  likes: string;
  comments: string;
};

const PRODUCTS: Product[] = [
  {
    name: "ChatGPT",
    domain: "openai.com",
    category: "Chat",
    description:
      "ChatGPT is a conversational AI assistant capable of generating human-like text, coding, and solving complex problems.",
    badge: "🔥 Trending in Coding",
    likes: "24.5K",
    comments: "612",
  },
  {
    name: "GPT-4o",
    domain: "openai.com",
    category: "Chat",
    description:
      "GPT-4o is OpenAI's flagship multimodal model, integrating text, voice, and vision in real time.",
    badge: "✓ Most used this week",
    likes: "18.9K",
    comments: "472",
  },
  {
    name: "Cursor Editor",
    domain: "cursor.sh",
    category: "Code",
    description:
      "Cursor is the AI-first code editor, built on VS Code, allowing developers to write and edit code at lightning speed.",
    badge: "⭐ Top rated in Image",
    likes: "15.4K",
    comments: "385",
  },
  {
    name: "Synthesia Agents Tool",
    domain: "synthesia.io",
    category: "Agents",
    description: "A powerful agents processing engine powered by Synthesia AI.",
    badge: "⚡ Fastest growing",
    likes: "5.5K",
    comments: "136",
  },
  {
    name: "Cognition Code Tool",
    domain: "cognition.ai",
    category: "Code",
    description: "A powerful code processing engine powered by Cognition AI.",
    likes: "5.2K",
    comments: "128",
  },
  {
    name: "Harvey Chat Tool",
    domain: "harvey.ai",
    category: "Chat",
    description: "A powerful chat processing engine powered by Harvey AI.",
    badge: "🔥 Trending in Voice",
    likes: "4.8K",
    comments: "121",
  },
  {
    name: "Mistral AI Agents Tool",
    domain: "mistral.ai",
    category: "Agents",
    description:
      "A powerful agents processing engine powered by Mistral AI AI.",
    badge: "✓ Most used this week",
    likes: "4.8K",
    comments: "120",
  },
  {
    name: "Phind Productivity Tool",
    domain: "phind.com",
    category: "Productivity",
    description: "A powerful productivity processing engine powered by Phind AI.",
    likes: "4.5K",
    comments: "113",
  },
  {
    name: "Glean Code Tool",
    domain: "glean.com",
    category: "Code",
    description: "A powerful code processing engine powered by Glean AI.",
    likes: "4.5K",
    comments: "112",
  },
  {
    name: "Character.ai Voice Tool",
    domain: "character.ai",
    category: "Voice",
    description: "A powerful voice processing engine powered by Character.ai AI.",
    likes: "4.2K",
    comments: "105",
  },
];

export default function TrendingProducts() {
  const [sort, setSort] = useState("Popular");

  return (
        <section className="px-4 sm:px-6 py-4">

  {/* HEADER */}
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">

    {/* LEFT: Tabs */}
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
      <TabButton active>Most Popular</TabButton>
      <TabButton>Newest</TabButton>

      <span className="text-xs text-gray-400 font-semibold ml-2 shrink-0">
        20,698 products
      </span>
    </div>

    {/* RIGHT: Sort */}
    <div className="flex justify-start sm:justify-end">
      <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:border-gray-300 transition-colors">
        Sort by: {sort}
        <ChevronDownIcon />
      </button>
    </div>

  </div>

  {/* LIST */}
  <div className="space-y-0">
    {PRODUCTS.map((p, i) => (
      <ProductRow key={p.name} index={i + 1} product={p} />
    ))}
  </div>

  {/* LOAD MORE */}
  <div className="flex justify-center mt-6">
    <button className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900 text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-xl transition-all">
      Load more products
      <ChevronDownIcon />
    </button>
  </div>

</section>
  );
}

/* ---------------- ROW ---------------- */

function ProductRow({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <div className="flex items-start gap-3 py-3.5 border-b border-gray-50 hover:bg-gray-50/60 transition-colors rounded-lg px-1 -mx-1 cursor-pointer group">
      {/* index */}
      <span className="text-xs font-black text-gray-300 w-5 shrink-0 mt-2.5 text-right">
        {index}
      </span>

      {/* icon */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${product.domain}&sz=128`}
        alt={product.name}
        width={40}
        height={40}
        className="rounded-xl object-cover shrink-0"
      />

      {/* content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <span className="text-sm font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
            {product.name}
          </span>

          <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            {product.category}
          </span>

          {product.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
              {product.badge}
            </span>
          )}
        </div>

        <p className="text-xs text-gray-500 truncate max-w-md leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* stats */}
      <div className="flex items-center gap-3 shrink-0 mt-1">
        <Action icon={<HeartIcon />} label={product.likes} hover="rose" />
        <Action icon={<CommentIcon />} label={product.comments} hover="blue" />
      </div>
    </div>
  );
}

/* ---------------- UI COMPONENTS ---------------- */

function TabButton({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={[
        "text-sm font-bold pb-0.5 transition-all border-b-2",
        active
          ? "border-rose-500 text-rose-500"
          : "border-transparent text-gray-400 hover:text-gray-700",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Action({
  icon,
  label,
  hover,
}: {
  icon: React.ReactNode;
  label: string;
  hover: "rose" | "blue";
}) {
  const hoverClass =
    hover === "rose"
      ? "hover:text-rose-500"
      : "hover:text-blue-500";

  return (
    <button
      className={`flex items-center gap-1 text-xs text-gray-400 ${hoverClass} transition-colors`}
    >
      {icon}
      <span className="font-semibold">{label}</span>
    </button>
  );
}

/* ---------------- ICONS ---------------- */

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-3 w-3"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-3.5 w-3.5"
    >
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-3.5 w-3.5"
    >
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </svg>
  );
}