export default function CollectionBanner() {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#111827] p-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold uppercase">
            Collection
          </span>

          <h2 className="mt-5 text-3xl font-bold">
            Top AI Coding Assistants
          </h2>

          <p className="mt-3 max-w-xl text-gray-300">
            Explore the fastest-growing AI coding tools used by developers,
            startups, and enterprises.
          </p>

          <button className="mt-6 rounded-xl bg-red-500 px-6 py-3 font-semibold hover:bg-red-600">
            Explore Collection
          </button>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:flex gap-4">
          {["Cursor", "Windsurf", "Claude", "GitHub Copilot"].map((tool) => (
            <div
              key={tool}
              className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 backdrop-blur"
            >
              <span className="text-center text-sm font-medium">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}