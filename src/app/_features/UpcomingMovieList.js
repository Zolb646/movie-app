"use client";
import { useEffect, useState } from "react";
import { SectionHeader } from "../_components/SectionHeader";
import { MovieCard } from "../_components/MovieCard";
import { SectionHeaderLoader } from "../_components/SectionHeaderLoader";
import { MovieCardsLoader } from "../_components/MovieCardsLoader";

const apiLink =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const UpcomingMovieList = (props) => {
  const { SectionTitle, sectionLink } = props;
  const [upcomingMoviesData, setupcomingMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    console.log("this is data", jsonData);
    setupcomingMoviesData(jsonData.results.slice(0, 10));
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="w-full aspect-[1440/980] flex px-20 flex-col justify-between">
        <SectionHeaderLoader />
        <div className="flex flex-wrap justify-between place-content-between w-full h-[93%]">
          <MovieCardsLoader />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full aspect-[1440/980] flex px-20 flex-col justify-between">
      <SectionHeader SectionTitle={SectionTitle} sectionLink={sectionLink} />
      <div className="flex flex-wrap justify-between place-content-between w-full h-[93%]">
        {upcomingMoviesData.map((movie, index) => {
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
    </div>
  );
};
