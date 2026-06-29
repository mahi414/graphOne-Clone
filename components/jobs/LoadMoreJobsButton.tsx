"use client";

type LoadMoreJobsButtonProps = {
  onClick?: () => void;
  loading?: boolean;
};

export default function LoadMoreJobsButton({
  onClick,
  loading = false,
}: LoadMoreJobsButtonProps) {
  return (
    <div className="flex justify-center mt-4 mb-8">
      <button
        onClick={onClick}
        disabled={loading}
        className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Loading..." : "Load more jobs"}

        {!loading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </button>
    </div>
  );
}