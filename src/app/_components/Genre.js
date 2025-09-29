import { FaAngleRight } from "react-icons/fa6";
export const Genre = ({ buttonText }) => {
  return (
    <button className="rounded-4xl shadow bg-[#f5f5f7] flex items-center px-5 py-1.5 gap-2.5 active:scale-95 text-sm">
      {buttonText}
      <FaAngleRight />
    </button>
  );
};
