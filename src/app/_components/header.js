import { FaArrowRight } from "react-icons/fa";
export const Header = () => {
  return (
    <div className="w-full h-9 flex justify-between">
      <p className="text-3xl font-[600]">Upcoming</p>
      <button className="rounded-4xl shadow bg-[#f5f5f7] flex items-center px-5 py-1.5 gap-2.5">
        See more
        <FaArrowRight />
      </button>
    </div>
  );
};
