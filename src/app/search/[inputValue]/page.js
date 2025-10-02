"use client";
import { Footer } from "@/app/_features/Footer";
import { Navbar } from "@/app/_features/navbar";
import { SearchDetails } from "./_features/searchList";
import { useParams } from "next/navigation";

export default function Page() {
  const param = useParams();
  const { inputValue } = param;
  if (!inputValue) {
    return <div>Something wrong!</div>;
  }
  return (
    <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-self-center overflow-hidden bg-white z-[-1] gap-9 items-center dark:bg-black">
      <Navbar />
      <SearchDetails SectionTitle={"Search results"} inputValue={inputValue} />
      <Footer />
    </div>
  );
}
