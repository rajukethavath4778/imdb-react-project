import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (function () {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=9982b8ceb05b6fbfc1744f1b8e50f2fd"
        )
        .then((response) => {
          //response or res  adina pettukovachu just store on that anthee
          //console.log(response.data.results);
          setMovies(response.data.results);
        });
    })();

    console.log("Test");
  }, []);
  console.log(movies);

  return (
    <div>
      <div className="text-black text-xl mb-8 font-bold  text-center">
        Trending Movies
      </div>
      <div className="flex flex-wrap ">
        {movies.map((movie) => {
          return (
            <div
              className="w-[150px] h-[50vh] md:h-[50vh] bg-center bg-contain hover:scale-110 duration 300 flex items-end  rounded-xl m-2 "
              style={{
                backgroundImage: `url(https://image.tmdb.org/tp/original/t/p/w500/${movie.poster_path})`,
              }}
            >
              <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-50 p-2 rounded-b-xl">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
