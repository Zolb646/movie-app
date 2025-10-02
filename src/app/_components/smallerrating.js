import { FaStar } from "react-icons/fa";

export function SmallRating({ score }) {
  return (
    <div className="flex items-center text-gray-400 ">
      <FaStar className="mr-1 text-yellow-400 size-5" />
      <p className="text-base">
        <span className="font-bold text-black dark:text-white text-lg">
          {score}
        </span>
        /10
      </p>
    </div>
  );
}
