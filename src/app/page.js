"use client";
import { useEffect } from "react";
import { Navbar } from "./_features/navbar";
import { HeroSection } from "./_features/HeroSection";
import { UpcomingMovieList } from "./_features/UpcomingMovieList";
import { Footer } from "./_features/Footer";
import { PopularMovieList } from "./_features/PopularMovieList";
import { TopRatedMovieList } from "./_features/TopRatedMovieList";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-self-center overflow-hidden bg-white z-[-1] gap-9">
      <Navbar />
      <HeroSection />
      <UpcomingMovieList SectionTitle="Upcoming" sectionLink={"/Upcoming"} />
      <PopularMovieList SectionTitle="Popular" sectionLink={"/Popular"} />
      <TopRatedMovieList SectionTitle="Top Rated" sectionLink={"/TopRated"} />
      <Footer />
    </div>
  );
}
