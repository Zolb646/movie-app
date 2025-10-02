import { GenreResults } from "@/app/_components/genreResults";
import { MovieCard } from "@/app/_components/MovieCard";
import { MovieCardsLoader } from "@/app/_components/MovieCardsLoader";
import { MovieCardSmall } from "@/app/_components/movieCardSmall";
import { Panigation } from "@/app/_components/panigation";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const SearchDetails = ({ SectionTitle, inputValue }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async () => {
    setLoading(true);
    if (!inputValue.trim()) {
      setSearchResults([]);
      setLoading(false);
      return;
    }
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${inputValue}&language=en-US&page=1`,
      options
    );

    const jsonData = await data.json();
    console.log("this is search data1", jsonData);
    setSearchResults(jsonData.results);
    setTotalPages(jsonData.total_pages);
    console.log("search1", searchResults);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [inputValue]);

  if (loading) {
    return (
      <div className="w-full h-[1960px] flex flex-col px-20 justify-between">
        <div className="w-full h-9 flex justify-between items-center animate-pulse">
          <div className="h-full w-28 bg-gray-200 rounded-lg" />
        </div>
        <div className="flex flex-wrap gap-6 w-full h-[93%]">
          <MovieCardsLoader />
          <MovieCardsLoader />
          <MovieCardsLoader />
          <MovieCardsLoader />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1280px] flex flex-col gap-6 mb-24 mx-auto">
      <div className="w-full h-9 flex justify-between items-center">
        <p className="text-3xl font-semibold">{SectionTitle}</p>
      </div>

      <div className="w-full flex gap-6">
        <div className="flex-1">
          <p className="mb-4 text-lg font-extrabold">
            {searchResults.length} results for <span>"{inputValue}"</span>
          </p>
          <div className="flex flex-wrap justify-between gap-6">
            {searchResults.map((movie, index) => (
              <MovieCardSmall
                key={index}
                title={movie.title}
                rating={movie.vote_average.toFixed(1)}
                image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                movieId={movie.id}
              />
            ))}
          </div>
          <div className="mt-6">
            <Panigation page={page} setPage={setPage} totalPages={totalPages} />
          </div>
        </div>

        <div className="w-px bg-gray-300"></div>

        <div className="w-[30%]">
          <GenreResults />
        </div>
      </div>
    </div>
  );
};
