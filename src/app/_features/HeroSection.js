"use client";
import { useState, useEffect } from "react";
import { Scroller } from "../_components/HeroScroll";

const apiLink =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer YOUR_TOKEN_HERE",
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
    if (trailer) setTrailerKey(trailer.key);
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
    return (
      <div className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] bg-gray-200 rounded-lg animate-pulse"></div>
    );
  }

  return (
    <>
      <div className="w-full overflow-hidden relative">
        <div
          className="flex w-fit transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroSectionMoviesData.map((movie, index) => (
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
              className="w-full flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {trailerKey && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-xl w-full max-w-4xl">
            <button
              onClick={() => setTrailerKey(null)}
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-400 z-10"
            >
              ✕
            </button>

            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                title="Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
