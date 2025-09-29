"use client";
import { useState, useEffect } from "react";
import { Scroller } from "../_components/HeroScroll";

const apiLink =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const HeroSection = () => {
  const [heroSectionMoviesData, setHeroSectionMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    console.log("Hero image data1", jsonData);
    setHeroSectionMoviesData(jsonData.results.slice(0, 3));
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  const fetchTrailer = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const jsonData = await data.json();

    const trailer = jsonData.results.find(
      (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    );

    if (trailer) {
      setTrailerKey(trailer.key);
    }
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, heroSectionMoviesData.length - 1)
    );
  };

  if (loading) {
    return <div className="w-[1440px] h-[600px] bg-gray-200 rounded-lg"></div>;
  }

  return (
    <>
      <div className="w-[1440px] h-[600px] ">
        <div
          className="flex w-fit shrink-0 transition-transform duration-1000 "
          style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
        >
          {heroSectionMoviesData.map((movie, index) => {
            return (
              <Scroller
                key={index}
                movieTag={movie.title}
                score={movie.vote_average.toFixed(1)}
                movieImage={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                movieText={movie.overview}
                onClick={() => fetchTrailer(movie.id)}
                index={index}
                total={heroSectionMoviesData.length}
                handleNext={handleNext}
                handlePrev={handlePrev}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                heroSectionMoviesData={heroSectionMoviesData}
              />
            );
          })}
        </div>
      </div>
      {trailerKey && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-xl w-[90%] max-w-4xl">
            <button
              onClick={() => setTrailerKey(null)}
              className="absolute top-3 right-3 text-white text-xl font-bold hover:text-red-400"
            >
              ✕
            </button>

            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};
