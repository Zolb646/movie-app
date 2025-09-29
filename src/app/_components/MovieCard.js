import { useRouter } from "next/navigation";
import { SmallRating } from "./smallerrating";

export const MovieCard = (props) => {
  const { image, title, rating, movieId } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push(`movie-detail/${movieId}`);
  };

  return (
    <div
      className="w-[230px] h-[439px] flex flex-col bg-[#f4f4f5] shadow rounded-xl justify-between cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} className="rounded-t-xl w-full h-[80%] object-cover" />
      <div className="w-full h-[19.5%] rounded-xl pl-2.5">
        <SmallRating score={rating} className="h-[10%]" />
        <p className="text-lg h-[90%]">{title}</p>
      </div>
    </div>
  );
};
