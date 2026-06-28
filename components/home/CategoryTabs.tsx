const tabs = [
  "All",
  "Chat",
  "Code",
  "Image",
  "Video",
  "Audio",
  "Research",
];

export default function CategoryTabs() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            index === 0
              ? "bg-red-500 text-white"
              : "bg-white border border-gray-200 hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}