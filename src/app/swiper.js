import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const movies = [
  {
    title: "Wicked",
    rating: 6.9,
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    image: "/image.jpg",
    trailer: "https://youtube.com/watch?v=example1",
  },
  {
    title: "Inside Out 2",
    rating: 8.1,
    description:
      "Riley is now a teenager facing brand new emotions that shake up her world in unexpected ways.",
    image: "/image.jpg", // replace with your image
    trailer: "https://youtube.com/watch?v=example2",
  },
  {
    title: "Frozen 3",
    rating: 7.8,
    description:
      "Anna, Elsa, Kristoff, and Olaf embark on a new journey into the unknown, discovering secrets that will change their world forever.",
    image: "/image.jpg", // replace with your image
    trailer: "https://youtube.com/watch?v=example3",
  },
];

export default function MovieCarousel() {
  return (
    <div className="w-full h-[550px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        {movies.map((movie, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-[550px] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${movie.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 p-10 max-w-xl text-white">
                <h2 className="text-4xl font-bold">{movie.title}</h2>
                <p className="mt-2 text-yellow-400 text-lg">
                  ⭐ {movie.rating}
                </p>
                <p className="mt-4 leading-relaxed">{movie.description}</p>
                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block bg-white text-black font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  ▶ Watch Trailer
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
