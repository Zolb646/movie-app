"use client";
import { useEffect, useState } from "react";
import { MovieCardsLoader } from "@/app/_components/MovieCardsLoader";
import { MovieCard } from "@/app/_components/MovieCard";
import { Panigation } from "../../_components/panigation";

const apiLink = "https://api.themoviedb.org/3/movie/popular?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const MovieList = ({ SectionTitle }) => {
  const [MoviesData, setMoviesData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPage = localStorage.getItem("moviePage");
      if (savedPage) {
        setPage(Number(savedPage));
      }
    }
  }, []);

  const getData = async () => {
    setLoading(true);
    const data = await fetch(`${apiLink}&page=${page}`, options);
    const jsonData = await data.json();
    console.log("this is data", jsonData);
    setMoviesData(jsonData.results);
    setTotalPages(jsonData.total_pages);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    localStorage.setItem("moviePage", page);
  }, [page]);

  if (loading) {
    return (
      <div className="w-full aspect-[1440/1960] flex px-20 flex-col justify-between">
        <div className="w-full h-9 flex justify-between items-center animate-pulse">
          <div className="h-9 w-28 bg-gray-200 rounded-lg" />
        </div>
        <div className="flex flex-wrap justify-between place-content-between w-full h-[93%]">
          <MovieCardsLoader />
          <MovieCardsLoader />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full aspect-[1440/1960] flex px-20 flex-col justify-between">
      <div className="w-full h-9 flex justify-between items-center">
        <p className="text-3xl font-semibold">{SectionTitle}</p>
      </div>
      <div className="flex flex-wrap justify-between place-content-between w-full h-[93%]">
        {MoviesData.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              title={movie.title}
              rating={movie.vote_average.toFixed(1)}
              image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              movieId={movie.id}
            />
          );
        })}
      </div>
      <Panigation page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};
