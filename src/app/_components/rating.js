import { FaStar } from "react-icons/fa";

export function Rating({ score }) {
  return (
    <div className="flex items-center text-gray-400">
      <FaStar className="mr-1 text-yellow-400 size-7" />
      <p className="text-xl">
        <span className="font-bold text-white text-2xl">{score}</span>/10
      </p>
    </div>
  );
}
