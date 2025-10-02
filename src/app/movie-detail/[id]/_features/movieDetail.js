"use client";
import { CreditItem } from "@/app/_components/creditItem";
import { MovieCard } from "@/app/_components/MovieCard";
import { MovieDetailLoader } from "@/app/_components/movieDetailLoader";
import { MovieGenre } from "@/app/_components/movieGenre";
import { SectionHeaderDynamic } from "@/app/_components/sectionHeaderDynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Details = (props) => {
  const { id } = props;
  const router = useRouter();
  const [movieDetail, setMovieDetail] = useState({});
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const getDetail = async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const jsonData = await data.json();

    const similarMovieData = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      options
    );
    const similarMovieJson = await similarMovieData.json();

    const creditsData = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );
    const creditsJson = await creditsData.json();

    const directors = creditsJson.crew.filter((c) => c.job === "Director");

    const writers = creditsJson.crew.filter(
      (c) => c.known_for_department === "Writing"
    );
    const uniqueWriters = [...new Map(writers.map((w) => [w.id, w])).values()];

    const stars = creditsJson.cast.slice(0, 5);
    console.log(creditsJson);

    console.log(directors);
    console.log(writers);
    console.log(stars);

    setMovieDetail({
      ...jsonData,
      credits: {
        directors,
        writers: uniqueWriters,
        stars,
      },
      similar: similarMovieJson.results.slice(0, 5),
    });
    console.log("sfa", similarMovieJson);
    setLoading(false);
  };
  const handleClick = () => {
    router.push(`/moreLikeThis/${id}`);
  };

  useEffect(() => {
    getDetail();
  }, [id]);
  const fetchTrailer = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const jsonData = await data.json();

    const trailer = jsonData.results.find(
      (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    );
    console.log("dasf", jsonData);
    setTrailerKey(trailer?.key);
  };
  const runtime = movieDetail.runtime || 0;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (loading) {
    return <MovieDetailLoader />;
  }

  return (
    <>
      <div className=" w-full max-w-[1080px] mx-auto h-fit px-8 flex flex-col gap-8 ">
        <div className="w-full aspect-[1080/524] flex flex-col justify-between">
          <div className="w-full aspect-[1080/72] flex justify-between">
            <div className="w-fit h-full ">
              <h1 className="text-4xl font-bold">{movieDetail.title}</h1>
              <p className="flex items-center">
                {movieDetail.release_date}
                <BsDot className="text-3xl" />
                {movieDetail.production_countries
                  ?.map((c) => c.name)
                  .join(", ")}
                <BsDot className="text-3xl" />
                {hours}h {minutes}m
              </p>
            </div>
            <div className="w-fit h-full  flex flex-col">
              <p className="font-medium">rating</p>
              <div className="flex items-center h-[60%]">
                <FaStar className="mr-1 text-yellow-400 size-7" />
                <div className="h-full">
                  <p className="text-gray-500">
                    <span className="font-bold text-xl text-black dark:text-white">
                      {movieDetail.vote_average}
                    </span>
                    /10
                  </p>
                  <h3>{Math.floor(movieDetail.popularity)}K</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full aspect-[1080/428] flex gap-5 h-fit">
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            />
            <div className="w-3xl h-full relative flex items-end">
              <img
                className="w-full h-full absolute z-10 "
                alt="trailer"
                src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
              />
              <div className="absolute w-fit h-fit z-15 mb-7 ml-9 flex items-center gap-5">
                <button
                  onClick={() => {
                    fetchTrailer(movieDetail.id);
                  }}
                  className="flex items-center justify-center bg-white rounded-full p-2.5 z-20 shadow-lg border border-gray-300 hover:scale-105 hover:shadow-xl transition-all"
                >
                  <FiPlay className="size-5" />
                </button>
                <p className="text-white text-center flex gap-2 font-normal">
                  Play Trailer
                  <span>
                    {hours}:{minutes}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full aspect-[1080/271] flex flex-col gap-5">
          <div className="w-full h-5 flex gap-3">
            {movieDetail.genres?.map((movie, index) => {
              return <MovieGenre genre={movie.name} key={index} />;
            })}
          </div>
          <div className="w-full h-fit text-base">{movieDetail.overview}</div>
          {[
            {
              label: "Director",
              items: movieDetail.credits?.directors.map((d) => d.name),
            },
            {
              label: "Writers",
              items: movieDetail.credits?.writers.map((w) => w.name),
            },
            {
              label: "Stars",
              items: movieDetail.credits?.stars.map((s) => s.name),
            },
          ].map((credit, i) => (
            <CreditItem
              key={i}
              label={credit.label}
              items={credit.items || []}
            />
          ))}
        </div>
        <div className="w-full aspect-[1080/530] flex  flex-col justify-between items-center">
          <SectionHeaderDynamic
            SectionTitle={"More like this"}
            onClick={handleClick}
          />
          <div className="flex w-fit gap-5 h-[93%] justify-between items-end">
            {movieDetail.similar?.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                rating={movie.vote_average.toFixed(1)}
                image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                movieId={movie.id}
              />
            ))}
          </div>
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
