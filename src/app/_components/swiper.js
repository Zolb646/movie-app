import { Rating } from "./rating";
import { Run } from "./trailor";

export const Scroller = (props) => {
  const { movieTag, movieImage, movieText } = props;
  return (
    <div className="w-[1440px] h-[600px] relative flex items-center">
      <img
        src={movieImage}
        className="object-cover w-full h-full absolute z-[0]"
      />
      <div className="w-[30%] h-[50%] ml-24 z-10">
        <div className="w-full h-[50%] flex flex-col justify-evenly">
          <p className="text-white text-xl">Now playing:</p>
          <h1 className="text-white font-bold text-4xl">{movieTag}</h1>
          <div>
            <Rating score={6.9} />
          </div>
        </div>
        <p className="text-white font-medium">{movieText} </p>
        <Run />
      </div>
    </div>
  );
};
