import React from "react";

interface CategoryTagProps {
  icon: React.ReactNode;
  label: string;
}

export function CategoryTag({ icon, label }: CategoryTagProps) {
  return (
    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-[12px] font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all bg-white shadow-sm">
      {icon}
      {label}
    </button>
  );
}
