"use client";
import { Footer } from "@/app/_features/Footer";
import { Navbar } from "@/app/_features/navbar";
import { GenreMovieList } from "./_features/genreMovieList";
import { useParams } from "next/navigation";

export default function Page() {
  const param = useParams();
  const { id } = param;
  if (!id) {
    return <div>Something wrong!</div>;
  }
  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-self-center overflow-hidden bg-white z-[-1] gap-9 dark:bg-black">
      <Navbar />
      <GenreMovieList genreId={id} SectionTitle={"Search filter"} />
      <Footer />
    </div>
  );
}
