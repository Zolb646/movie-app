"use client";
import { useRouter } from "next/navigation";
import { SmallRating } from "./smallerrating";

export const MovieCardSmall = (props) => {
  const { image, title, rating, movieId } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movie-detail/${movieId}`);
  };

  return (
    <div
      className="w-[165px] h-[331px] flex flex-col bg-[#f4f4f5] shadow rounded-xl justify-between cursor-pointer dark:bg-[#27272a]"
      onClick={handleClick}
    >
      <img
        src={image}
        className="rounded-t-xl w-full h-[70%] object-cover hover:brightness-50 duration-300"
      />
      <div className="w-full h-[29.5%] rounded-xl pl-2.5">
        <SmallRating score={rating} className="h-[10%]" />
        <p className="text-base h-fit">{title}</p>
      </div>
    </div>
  );
};
