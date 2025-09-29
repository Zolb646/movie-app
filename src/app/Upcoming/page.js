import { Navbar } from "../_features/navbar";
import { Footer } from "../_features/Footer";
import { MovieList } from "./_features/movieList";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-self-center overflow-hidden bg-white z-[-1] gap-9">
      <Navbar />
      <MovieList SectionTitle={"Upcoming"} />
      <Footer />
    </div>
  );
}
