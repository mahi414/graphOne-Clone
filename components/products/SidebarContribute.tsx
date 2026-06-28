import Link from "next/link";
import { CirclePlus, Plus } from "lucide-react";

export default function SidebarContribute() {
  return (
    <div className="mt-6 pt-4 border-t border-gray-100">
      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-3 mb-2">
        Contribute
      </p>

      <Link
        href="/"
        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
      >
        <CirclePlus className="h-4 w-4 text-rose-400 shrink-0" />
        Submit Startup
      </Link>

      <Link
        href="/products"
        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
      >
        <Plus className="h-4 w-4 text-rose-400 shrink-0" />
        Submit Product
      </Link>
    </div>
  );
}