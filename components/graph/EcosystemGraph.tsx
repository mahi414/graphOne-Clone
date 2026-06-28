export default function EcosystemGraph() {
  const companies = [
    { name: "OpenAI", top: "18%", left: "42%" },
    { name: "Anthropic", top: "48%", left: "72%" },
    { name: "Cursor", top: "78%", left: "45%" },
    { name: "Perplexity", top: "48%", left: "12%" },
    { name: "xAI", top: "10%", left: "72%" },
    { name: "Runway", top: "80%", left: "75%" },
  ];

  return (
    <div className="relative h-[500px] rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Center */}
      <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white shadow-xl">
        GraphOne
      </div>

      {/* Outer Ring */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-red-200" />

      {companies.map((company) => (
        <div
          key={company.name}
          className="absolute z-10 rounded-2xl bg-white px-5 py-3 shadow-lg border"
          style={{
            top: company.top,
            left: company.left,
            transform: "translate(-50%,-50%)",
          }}
        >
          <p className="font-semibold">{company.name}</p>
        </div>
      ))}
    </div>
  );
}