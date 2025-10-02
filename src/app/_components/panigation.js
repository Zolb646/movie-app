import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
export const Panigation = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex justify-end items-center gap-3 mt-6">
      {/* Prev Button */}
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
        className="px-3 py-1 border rounded-md shadow disabled:opacity-50 flex items-center
                   bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700"
      >
        <FaAngleLeft className="mr-1" /> Prev
      </button>

      {/* First Page */}
      <button
        onClick={() => setPage(1)}
        className={`px-3 py-1 border rounded-md shadow
          ${
            page === 1
              ? "bg-indigo-600 text-white"
              : "bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700"
          }`}
      >
        1
      </button>

      {page > 3 && <span className="px-2 text-black dark:text-white">...</span>}

      {/* Middle Pages */}
      {Array.from({ length: 3 }, (_, i) => page - 1 + i)
        .filter((p) => p > 1 && p < totalPages)
        .map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-3 py-1 border rounded-md shadow
              ${
                p === page
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700"
              }`}
          >
            {p}
          </button>
        ))}

      {page < totalPages - 2 && (
        <span className="px-2 text-black dark:text-white">...</span>
      )}

      {/* Last Page */}
      {totalPages > 1 && (
        <button
          onClick={() => setPage(totalPages)}
          className={`px-3 py-1 border rounded-md shadow
            ${
              page === totalPages
                ? "bg-indigo-600 text-white"
                : "bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700"
            }`}
        >
          {totalPages}
        </button>
      )}

      {/* Next Button */}
      <button
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded-md shadow disabled:opacity-50 flex items-center
                   bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-700"
      >
        Next <FaAngleRight className="ml-1" />
      </button>
    </div>
  );
};
