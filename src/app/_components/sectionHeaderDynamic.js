import { SeeMoreDynamic } from "./seeMoreDynamic";

export const SectionHeaderDynamic = ({ SectionTitle, onClick }) => {
  return (
    <div className="w-full h-9 flex justify-between items-center">
      <p className="text-3xl font-semibold">{SectionTitle}</p>
      <SeeMoreDynamic onClick={onClick} />
    </div>
  );
};
