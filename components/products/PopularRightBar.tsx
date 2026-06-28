import Image from "next/image";

export default function PopularRightBar() {
  return (
      <aside className="
  hidden lg:block
  w-full lg:w-64 xl:w-60
  border-l border-gray-100
  px-4 py-6
  bg-white
  lg:sticky lg:top-14
  lg:h-[calc(100vh-3.5rem)]
  lg:overflow-y-auto
  space-y-6
">
  
  {/* PRODUCT OF THE DAY */}
  <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
    
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2.5 flex items-center gap-2 border-b border-amber-100">
      <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
        Product of the Day
      </span>
    </div>

    <div className="p-4">
      <div className="flex items-center gap-3 mb-3">
        <Image
          src="https://www.google.com/s2/favicons?domain=cursor.sh&sz=128"
          alt="Cursor"
          width={40}
          height={40}
          className="rounded-xl"
        />

        <div className="min-w-0">
          <p className="text-sm font-black text-gray-900 truncate">Cursor</p>
          <p className="text-[10px] text-gray-400 font-medium truncate">
            AI Code Editor
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        The AI-first code editor that pairs with you to ship faster.
      </p>

      <button className="w-full bg-rose-500 hover:bg-rose-600 transition-colors text-white text-xs font-bold py-2.5 rounded-xl">
        View Product
      </button>
    </div>
  </div>

  {/* TRENDING SEARCHES */}
  <div>
    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1">
      <span className="text-rose-500">🔥</span>
      Trending Searches
    </p>

    <div className="flex flex-wrap gap-1.5">
      {[
        "Cursor",
        "Claude",
        "Vibe Coding",
        "Lovable",
        "Perplexity",
        "Midjourney",
        "Runway",
        "MCP",
        "AI Agents",
        "AI Notetaker",
      ].map((item) => (
        <button
          key={item}
          className="text-[11px] font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors px-2.5 py-1 rounded-lg"
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* NEWSLETTER */}
  <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-rose-50 to-pink-50 p-4">
    
    <div className="flex items-center gap-2 mb-2">
      <span className="text-lg">📧</span>
      <p className="text-sm font-black text-gray-900">
        Stay ahead in AI
      </p>
    </div>

    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
      Get weekly updates on new tools and trends.
    </p>

    <input
      type="email"
      placeholder="your@email.com"
      className="w-full text-xs border border-gray-200 bg-white rounded-xl px-3 py-2 outline-none focus:border-rose-300 transition-colors mb-2 placeholder:text-gray-400"
    />

    <button className="w-full bg-rose-500 hover:bg-rose-600 transition-colors text-white text-xs font-bold py-2.5 rounded-xl">
      Subscribe
    </button>
  </div>

   </aside>
  );
}