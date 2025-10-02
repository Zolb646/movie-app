import { SeeMoreButton } from "./seeMoreButton";
import { SeeMoreDynamic } from "./seeMoreDynamic";
import { SmallRating } from "./smallerrating";

export const SearchResults = (props) => {
  const { image, title, rating, year, onClick } = props;

  return (
    <div className="w-full flex items-center gap-4 p-3 rounded-lg cursor-pointer transition">
      <img
        src={image}
        alt={title}
        className="w-16 h-24 object-cover rounded-lg shadow"
      />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="font-semibold text-base line-clamp-1">{title}</p>
          <SmallRating score={rating} />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
          <span className="font-semibold">{year}</span>
          <SeeMoreDynamic onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
