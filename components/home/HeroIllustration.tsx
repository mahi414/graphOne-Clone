export default function HeroIllustration() {
  const companies = [
    { name: "OpenAI", top: "12%", left: "45%" },
    { name: "Anthropic", top: "28%", left: "78%" },
    { name: "Perplexity", top: "68%", left: "18%" },
    { name: "Cursor", top: "78%", left: "65%" },
    { name: "Runway", top: "45%", left: "85%" },
    { name: "xAI", top: "20%", left: "18%" },
  ];

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Background circles */}
      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-200" />

      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-100" />

      {/* Connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 500"
      >
        <line x1="300" y1="250" x2="300" y2="70" stroke="#fecaca" strokeWidth="2" />
        <line x1="300" y1="250" x2="500" y2="150" stroke="#fecaca" strokeWidth="2" />
        <line x1="300" y1="250" x2="460" y2="400" stroke="#fecaca" strokeWidth="2" />
        <line x1="300" y1="250" x2="120" y2="340" stroke="#fecaca" strokeWidth="2" />
        <line x1="300" y1="250" x2="110" y2="120" stroke="#fecaca" strokeWidth="2" />
      </svg>

      {/* Center node */}
      <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white shadow-xl">
        GraphOne
      </div>

      {/* Company nodes */}
      {companies.map((company) => (
        <div
          key={company.name}
          style={{
            top: company.top,
            left: company.left,
            transform: "translate(-50%, -50%)",
          }}
          className="absolute z-10 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="font-medium">{company.name}</span>
        </div>
      ))}
    </div>
  );
}