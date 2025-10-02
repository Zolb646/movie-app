"use client";
import { MdOutlineNightlight } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { LogoIndigo } from "../_components/LogoIndigo";
import { useEffect, useState } from "react";
import { GenrePopUP } from "../_components/GenrePopUp";
import Link from "next/link";
import { SearchPopUp } from "../_components/searchPopUp";
import { SearchLoader } from "../_components/searchLoader";
import { useTheme } from "next-themes";
import { GoSearch } from "react-icons/go";

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
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const handleInput = (e) => {
    SetInputValue(e.target.value);
    console.log(inputValue);
  };
  const getMovies = async () => {
    setLoading(true);
    if (!inputValue.trim()) {
      setSearch([]);
      setLoading(false);
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
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, [inputValue]);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
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
            <GoSearch className="text-xl text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="text-lg border-none focus:outline-none "
              value={inputValue}
              onChange={handleInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  getMovies();
                }
              }}
            />
          </div>
        </div>
        {openGenre && <GenrePopUP />}
        {loading ? (
          <SearchLoader />
        ) : search.length > 0 ? (
          <SearchPopUp search={search} inputValue={inputValue} />
        ) : inputValue.trim() ? (
          <div className="absolute top-full left-0 w-full bg-white border dark:bg-black border-gray-200 shadow rounded-lg p-4 text-center text-gray-500">
            No results found
          </div>
        ) : null}
      </div>
      <button
        className="shadow size-9 flex justify-center items-center border border-[#E4E4E7] rounded-lg"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <MdOutlineNightlight />
      </button>
    </div>
  );
};
