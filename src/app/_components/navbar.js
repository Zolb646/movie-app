import { MdOutlineNightlight } from "react-icons/md";
export const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex items-center justify-between px-[100px]">
      <div className="flex gap-[8px]">
        <img src="/film.svg" />
        <p className="text-indigo-700 italic font-bold text-xl">Movie Z</p>
      </div>
      <div className="flex gap-[20px]">
        <button className="flex items-center gap-[10px] rounded-lg border px-[20px] py-[5px] shadow text-xl border-[#E4E4E7]">
          <span>▼</span> Genre
        </button>
        <div className="flex border px-[20px] py-[5px] shadow border-[#E4E4E7] items-center gap-[10px]">
          <img src="/search.svg" className="size-6" />
          <input
            type="text"
            placeholder="Search..."
            className="text-lg border-none focus:outline-none "
          />
        </div>
      </div>
      <button className="shadow size-9 flex justify-center items-center border border-[#E4E4E7] rounded-lg">
        <MdOutlineNightlight />
      </button>
    </div>
  );
};
