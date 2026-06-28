"use client";

export default function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 py-6 sm:py-8 border-b border-gray-100 bg-white overflow-hidden">
  <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">

    {/* LEFT */}
    <div className="flex-1 min-w-0">

      {/* Badge */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-rose-500 font-black text-[10px] tracking-widest uppercase flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block animate-pulse" />
          LIVE AI INTELLIGENCE
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-2">
        The Global Intelligence Layer for AI.
      </h1>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm text-gray-500 mb-5 max-w-xl leading-relaxed">
        One graph connecting companies, founders, investors, products,
        funding and talent.
      </p>

      {/* Search */}
      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 shadow-sm w-full sm:max-w-md">
        <input
          type="text"
          placeholder="Search AI products, tools, categories…"
          className="flex-1 text-sm text-gray-700 bg-transparent outline-none placeholder:text-gray-400"
        />
        <button className="bg-rose-500 hover:bg-rose-600 transition-colors rounded-full p-1.5 shrink-0">
          <SearchIcon />
        </button>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <span className="text-[11px] font-semibold text-gray-400">
          Most searched
        </span>

        {["Databricks", "Notion", "Firecone", "Weaviate", "LangChain"].map(
          (item) => (
            <button
              key={item}
              className="text-[11px] font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors px-2.5 py-0.5 rounded-full"
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>

    {/* RIGHT GRAPH */}
    <div className="w-full lg:w-72 h-52 sm:h-56 lg:h-56 flex justify-center lg:justify-end">
      <div className="w-56 sm:w-64 lg:w-72">
        <AIGridGraph />
      </div>
    </div>

  </div>
</section>
  );
}

/* ---------------- ICON ---------------- */

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 text-white"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.34-4.34" />
    </svg>
  );
}

/* ---------------- GRAPH ---------------- */

function AIGridGraph() {
  return (
    <svg
      viewBox="0 0 280 260"
      className="w-full h-full"
      aria-label="AI ecosystem network graph"
    >
      <defs>
        <radialGradient id="cg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* glow */}
      <ellipse cx="140" cy="130" rx="110" ry="110" fill="url(#cg)" />

      {/* lines */}
      <line x1="140" y1="130" x2="140" y2="34" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="140" y1="130" x2="231.3" y2="100.3" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="140" y1="130" x2="196.4" y2="207.7" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="140" y1="130" x2="83.6" y2="207.7" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="140" y1="130" x2="48.7" y2="100.3" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* nodes */}
      <Node cx={140} cy={34} label="OpenAI" tag="OP" color="#10a37f" />
      <Node cx={231.3} cy={100.3} label="Anthropic" tag="AN" color="#c96442" />
      <Node cx={196.4} cy={207.7} label="Cursor" tag="CU" color="#111" />
      <Node cx={83.6} cy={207.7} label="Midjourney" tag="MI" color="#2c2c54" />
      <Node cx={48.7} cy={100.3} label="Perplexity" tag="PE" color="#1fb8cd" />

      {/* center */}
      <polygon
        points="140,110 157,120 157,140 140,150 123,140 123,120"
        fill="#f43f5e"
      />

      <text
        x="140"
        y="131"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="7"
        fontWeight="900"
        fill="white"
      >
        AI
      </text>

      <text
        x="140"
        y="160"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="700"
        fill="#6b7280"
      >
        Signal
      </text>
    </svg>
  );
}

/* ---------------- NODE ---------------- */

function Node({
  cx,
  cy,
  label,
  tag,
  color,
}: {
  cx: number;
  cy: number;
  label: string;
  tag: string;
  color: string;
}) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="18"
        fill="white"
        stroke="#e5e7eb"
        strokeWidth="1.5"
      />

      <text
        x={cx}
        y={cy + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="7"
        fontWeight="800"
        fill={color}
      >
        {tag}
      </text>

      <text
        x={cx}
        y={cy - 18}
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="700"
        fill="#6b7280"
      >
        {label}
      </text>
    </g>
  );
}