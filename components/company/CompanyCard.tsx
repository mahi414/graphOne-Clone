import Link from "next/link";

type Props = {
  slug: string;
  name: string;
  category: string;
  funding: string;
  valuation: string;
  growth: string;
  status: string;
};

export default function CompanyCard({
  slug,
  name,
  category,
  funding,
  valuation,
  growth,
  status,
}: Props) {
  return (
    <Link href={`/companies/${slug}`}>
      <div className="group cursor-pointer rounded-[28px] border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-100 to-red-50 text-xl font-bold text-red-500">
              {name[0]}
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">{name}</h2>
              <p className="mt-1 text-sm text-gray-500">{category}</p>
            </div>
          </div>

          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-500">
            {status}
          </span>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-100"></div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-y-5 text-sm">
          <div>
            <p className="text-gray-400">Funding</p>
            <p className="mt-1 font-semibold">{funding}</p>
          </div>

          <div>
            <p className="text-gray-400">Valuation</p>
            <p className="mt-1 font-semibold">{valuation}</p>
          </div>

          <div>
            <p className="text-gray-400">Growth</p>
            <p className="mt-1 font-semibold text-green-600">{growth}</p>
          </div>

          <div>
            <p className="text-gray-400">Founded</p>
            <p className="mt-1 font-semibold">AI Startup</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm text-gray-400">
            View Profile
          </span>

          <div className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-red-600">
            →
          </div>
        </div>
      </div>
    </Link>
  );
}