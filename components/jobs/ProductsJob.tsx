"use client";

export default function ProductJobs() {
  const jobs = [
    {
      company: "Jerry AI",
      logo: "jerry.ai",
      title: "Associate, Business Operations",
      info: "Remote · Toronto · $80K–$140K · today",
    },
    {
      company: "Traba",
      logo: "traba.co",
      title: "Senior Product Manager (AI Agents)",
      info: "New York City · $190K–$310K · today",
    },
    {
      company: "Skylight",
      logo: "skylight.com",
      title: "Product Manager",
      info: "Remote · $200K–$240K · today",
    },
    {
      company: "Corvee",
      logo: "corvee.com",
      title: "Product Manager",
      info: "San Francisco · $100K–$200K · 1 day ago",
    },
    {
      company: "WorkStep Ventures",
      logo: "workstep.com",
      title: "Founding Head of Product",
      info: "Remote · $175K–$200K · 3 days ago",
    },
  ];

  return (
    <section className="mb-8">
      {/* Heading */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-gray-900">
          Product Jobs
        </h2>

        <a
          href="#"
          className="text-xs text-rose-500 hover:text-rose-600 font-medium flex items-center gap-0.5"
        >
          View all product jobs

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 18 6-6-6-6"
            />
          </svg>
        </a>
      </div>

      {/* Jobs List */}
      <div>
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-gray-100"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-sm">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${job.logo}&sz=64`}
                  alt={job.company}
                  className="h-full w-full object-contain rounded"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  {job.title}
                </h4>

                <p className="text-xs text-gray-400">
                  {job.company} · {job.info}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 shrink-0">
              <button className="px-3 py-1.5 text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Save
              </button>

              <button className="px-3 py-1.5 text-xs font-semibold text-white bg-rose-500 rounded-lg hover:bg-rose-600 transition-colors">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}