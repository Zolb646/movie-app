"use client";
import { Footer } from "@/app/_features/Footer";
import { Navbar } from "@/app/_features/navbar";
import { useParams } from "next/navigation";
import { MovieList } from "./_features/movieList";

export default function MoreLikeThis() {
  const param = useParams();
  const { id } = param;
  if (!id) {
    return <div>Something wrong!</div>;
  }
  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-self-center items-center overflow-hidden bg-white z-[-1] gap-9 dark:bg-black">
      <Navbar />
      <MovieList SectionTitle={"More Like This"} id={id} />
      <Footer />
    </div>
  );
}
