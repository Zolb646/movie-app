import { SearchResults } from "./searchResults";

export const SearchPopUp = (props) => {
  const { search } = props;

  return (
    <div className="absolute top-full left-0 mt-2 w-full bg-white border border-[#E4E4E7] rounded-lg shadow-lg h-fit z-50 py-2.5">
      {search.map((movie, index) => (
        <div key={index} className="px-4">
          <SearchResults
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            title={movie.title}
            rating={movie.vote_average.toFixed(1)}
            year={movie.release_date.slice(0, 4)}
            sectionLink={"/"}
          />
          <div className="w-full h-5 items-center flex">
            <div className="w-full h-0.5 border border-gray-400"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
