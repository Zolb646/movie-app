"use client";
import { MdOutlineNightlight } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { LogoIndigo } from "../_components/LogoIndigo";
import { useEffect, useState } from "react";
import { GenrePopUP } from "../_components/GenrePopUp";
import Link from "next/link";
import { SearchPopUp } from "../_components/searchPopUp";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const Navbar = () => {
  const [openGenre, setOpenGenre] = useState(false);
  const [inputValue, SetInputValue] = useState("");
  const [search, setSearch] = useState([]);
  const handleInput = (e) => {
    SetInputValue(e.target.value);
    console.log(inputValue);
  };
  const getMovies = async () => {
    if (!inputValue.trim()) {
      setSearch([]);
      return;
    }
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${inputValue}&language=en-US&page=1`,
      options
    );

    const jsonData = await data.json();
    console.log("this is search data", jsonData);
    setSearch(jsonData.results.slice(0, 5));
    console.log("search", search);
  };
  useEffect(() => {
    getMovies();
  }, [inputValue]);
  return (
    <div className="w-full h-[80px] flex items-center justify-between px-20 z-20">
      <Link href={"/"}>
        <LogoIndigo className=" text-indigo-700 " />
      </Link>
      <div className="w-150 h-9 flex flex-col  gap-2 relative">
        <div className="flex gap-5 justify-center">
          <button
            className="flex items-center gap-[10px] rounded-lg border px-[20px] py-[5px] shadow text-xl border-[#E4E4E7]"
            onClick={() => setOpenGenre(!openGenre)}
          >
            <span>
              <FiChevronDown />
            </span>{" "}
            Genre
          </button>
          <div className="flex border px-[20px] py-[5px] shadow border-[#E4E4E7] items-center gap-[10px]">
            <img src="/search.svg" className="size-6" />
            <input
              type="text"
              placeholder="Search..."
              className="text-lg border-none focus:outline-none "
              value={inputValue}
              onChange={handleInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  {
                    () => getMovies();
                  }
                }
              }}
            />
          </div>
        </div>
        {openGenre && <GenrePopUP />}
        {search.length > 0 && <SearchPopUp search={search} />}
      </div>
      <button className="shadow size-9 flex justify-center items-center border border-[#E4E4E7] rounded-lg">
        <MdOutlineNightlight />
      </button>
    </div>
  );
};
