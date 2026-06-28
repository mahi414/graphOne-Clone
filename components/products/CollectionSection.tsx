"use client";

export default function CollectionSection() {
  return (
      <section className="mx-4 sm:mx-6 my-5 rounded-2xl border border-gray-100 bg-gray-50 overflow-hidden">
  <div className="flex flex-col sm:flex-row items-stretch">

    {/* LEFT CONTENT */}
    <div className="flex-1 p-4 sm:p-6">

      {/* Label */}
      <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-orange-500 flex items-center gap-1 mb-2">
        <FlameIcon />
        COLLECTION OF THE WEEK
      </p>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
        <span>🔥</span> Vibe Coding Tools
      </h2>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm text-gray-500 mb-4 max-w-md">
        The best AI tools for vibe coding, building and shipping faster.
      </p>

      {/* Avatars + stats */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex -space-x-2">
          <Avatar bg="#f43f5e">C</Avatar>
          <Avatar bg="#10a37f">L</Avatar>
          <Avatar bg="#5b3de0">V</Avatar>
          <Avatar bg="#1fb8cd">P</Avatar>
        </div>

        <span className="text-[11px] sm:text-xs font-semibold text-gray-500">
          2,341 products
        </span>
      </div>

      {/* Button */}
      <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 transition-colors text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl">
        Explore Collection
        <ArrowRightIcon />
      </button>
    </div>

    {/* RIGHT MOCK PANEL */}
    <div className="w-full sm:w-52 bg-gray-900 sm:rounded-r-2xl rounded-b-2xl sm:rounded-b-none p-4">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
      </div>

      <MockLine w="75%" color="bg-rose-400" />
      <MockLine w="50%" color="bg-blue-400" />
      <MockLine w="100%" color="bg-gray-600" />
      <MockLine w="66%" color="bg-emerald-400" />
      <MockLine w="80%" color="bg-gray-600" />
      <MockLine w="33%" color="bg-purple-400" />
      <MockLine w="75%" color="bg-gray-600" />
      <MockLine w="50%" color="bg-yellow-400" />
    </div>

  </div>
</section>
  );
}

/* ---------------- ICONS ---------------- */

function FlameIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-3 w-3"
    >
      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-3.5 w-3.5"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ---------------- UI COMPONENTS ---------------- */

function Avatar({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <div
      className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-black text-white"
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

function MockLine({ w, color }: { w: string; color: string }) {
  return <div className={`h-1.5 rounded-full ${color} mb-1.5 opacity-80`} style={{ width: w }} />;
}