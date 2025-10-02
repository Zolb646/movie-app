import { FaArrowRight } from "react-icons/fa6";

export const SeeMoreDynamic = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-4xl bg-[#f5f5f7] flex items-center px-5 py-1.5 gap-2.5 dark:bg-[#27272a]"
    >
      See more
      <FaArrowRight />
    </button>
  );
};
