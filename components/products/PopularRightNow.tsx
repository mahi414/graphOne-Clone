"use client";

const ITEMS = [
  {
    name: "Cursor",
    domain: "cursor.sh",
    desc: "AI code editor built for pair programming",
  },
  {
    name: "Claude",
    domain: "claude.com",
    desc: "Anthropic's helpful, harmless AI assistant",
  },
  {
    name: "Lovable",
    domain: "lovable.dev",
    desc: "Generate full-stack apps with a prompt",
  },
  {
    name: "Midjourney",
    domain: "midjourney.com",
    desc: "AI art generation via Discord",
  },
  {
    name: "Perplexity",
    domain: "perplexity.ai",
    desc: "AI-powered answer engine and search",
  },
  {
    name: "Runway",
    domain: "runwayml.com",
    desc: "AI video generation and editing suite",
  },
];

export default function PopularRightNow() {
  return (
      <section className="px-4 sm:px-6 py-4 border-b border-gray-100 bg-white">
        {/* Label */}
        <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-1 mb-3">
          <ZapIcon />
          POPULAR RIGHT NOW
        </p>

        {/* Scroll row */}
        <div
          className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
        >
          {ITEMS.map((item) => (
            <div
              key={item.name}
              className="shrink-0 w-[220px] sm:w-[240px] md:w-[260px]"
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      </section>
  );
}

/* ---------------- CARD ---------------- */

function Card({
  item,
}: {
  item: { name: string; domain: string; desc: string };
}) {
  return (
        <div className="flex items-center gap-2 sm:gap-2.5 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 rounded-xl px-3 py-2 sm:px-3 sm:py-2 cursor-pointer shrink-0 w-[200px] sm:w-[220px]">

            <img
            src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`}
            alt={item.name}
            width={32}
            height={32}
            className="rounded-lg sm:rounded-xl object-cover shrink-0 w-7 h-7 sm:w-8 sm:h-8"
          />

          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-gray-900 leading-tight truncate">
              {item.name}
            </p>

            <p className="text-[10px] text-gray-400 truncate max-w-full">
              {item.desc}
            </p>
          </div>

        </div>
        );
}

/* ---------------- ICON ---------------- */

function ZapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-3 w-3 text-rose-500"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}