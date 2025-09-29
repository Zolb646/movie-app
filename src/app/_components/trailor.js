import { VscRunAll } from "react-icons/vsc";

export const Run = (props) => {
  const { Clicked } = props;
  return (
    <button
      className="flex font-medium bg-white items-center rounded-2xl py-[10px] px-5 gap-2.5 mt-2.5"
      onClick={Clicked}
    >
      <VscRunAll className="size-5" />
      Watch Trailer
    </button>
  );
};
