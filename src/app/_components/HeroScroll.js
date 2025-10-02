import { Rating } from "./rating";
import { Run } from "./trailor";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

export const Scroller = (props) => {
  const {
    movieTag,
    movieImage,
    movieText,
    score,
    onClick,
    index,
    total,
    handlePrev,
    handleNext,
    currentIndex,
    setCurrentIndex,
    heroSectionMoviesData,
  } = props;

  return (
    <div className="w-[1440px] h-[600px] relative flex items-center">
      <img src={movieImage} className="w-full h-full absolute z-[0]" />
      {index > 0 && (
        <button
          className="absolute left-2.5 size-10 z-10 bg-white flex justify-center items-center rounded-4xl dark:bg-[#27272a]"
          onClick={handlePrev}
        >
          <FaAngleLeft className="size-6 " />
        </button>
      )}
      <div className="w-[30%] ml-24 z-10">
        <div className="w-full h-[50%] flex flex-col justify-evenly">
          <p className="text-white text-xl">Now playing:</p>
          <h1 className="text-white font-bold text-4xl">{movieTag}</h1>
          <div>
            <Rating score={score} />
          </div>
        </div>
        <p className="text-white font-medium">{movieText} </p>
        <Run Clicked={onClick} />
      </div>
      {index < total - 1 && (
        <button
          className="absolute right-2.5 size-10 z-10 bg-white flex justify-center items-center rounded-4xl dark:bg-[#27272a]"
          onClick={handleNext}
        >
          <FaAngleRight className="size-6 " />
        </button>
      )}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {Array.from({ length: heroSectionMoviesData.length }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full  transition-all duration-300 ${
              currentIndex === i ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
