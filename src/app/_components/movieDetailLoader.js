import { MovieCardsLoader } from "./MovieCardsLoader";
import { SectionHeaderLoader } from "./SectionHeaderLoader";

export const MovieDetailLoader = () => {
  return (
    <div className=" w-6xl h-fit px-8 flex flex-col gap-8">
      <div className="w-full aspect-[1080/524] flex flex-col justify-between">
        <div className="w-full aspect-[1080/72] flex justify-between">
          <div className="w-fit h-full flex flex-col justify-between">
            <div className="w-2xs h-11 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-3xs h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          <div className="w-fit h-full  flex flex-col">
            <p className="font-medium">rating</p>
            <div className="flex items-center h-[60%] flex-col justify-between">
              <div className="w-full h-[40%] bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-full h-[40%] bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="w-full aspect-[1080/428] flex gap-5 h-fit">
          <div className="w-[35%] h-full bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-[64%] h-full bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
      <div className="w-full aspect-[1080/271] flex flex-col">
        <div className="bg-gray-200 rounded-lg animate-pulse w-38 h-8 mb-3.5"></div>
        <div className="bg-gray-200 rounded-lg animate-pulse w-full h-6 mb-2.5"></div>
        <div className="bg-gray-200 rounded-lg animate-pulse w-3xl h-6 mb-6"></div>
        <div className="w-5xl h-7 flex gap-10">
          <div className="w-12 h-full bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-2xs h-full bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        <div className="w-full h-5 items-center flex">
          <div className="w-full h-0.5 border border-gray-300"></div>
        </div>
        <div className="w-5xl h-7 flex gap-10">
          <div className="w-12 h-full bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-2xs h-full bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        <div className="w-full h-5 items-center flex">
          <div className="w-full h-0.5 border border-gray-300"></div>
        </div>
        <div className="w-5xl h-7 flex gap-10">
          <div className="w-12 h-full bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-2xs h-full bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        <div className="w-full h-5 items-center flex">
          <div className="w-full h-0.5 border border-gray-300"></div>
        </div>
      </div>
      <SectionHeaderLoader />
      <div className="flex gap-3">
        <MovieCardsLoader />
      </div>
    </div>
  );
};
