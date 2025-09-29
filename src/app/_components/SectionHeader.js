import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { SeeMoreButton } from "./seeMoreButton";

export const SectionHeader = ({ SectionTitle, sectionLink }) => {
  return (
    <div className="w-full h-9 flex justify-between items-center">
      <p className="text-3xl font-semibold">{SectionTitle}</p>

      <SeeMoreButton sectionLink={sectionLink} />
    </div>
  );
};
