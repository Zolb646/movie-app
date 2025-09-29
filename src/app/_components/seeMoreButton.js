import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export const SeeMoreButton = ({ sectionLink }) => {
  return (
    <Link
      href={sectionLink}
      className="rounded-4xl bg-[#f5f5f7] flex items-center px-5 py-1.5 gap-2.5"
    >
      See more
      <FaArrowRight />
    </Link>
  );
};
