import React from "react";
import axios from "axios";

const MovieCard = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=9982b8ceb05b6fbfc1744f1b8e50f2fd"
    )
    .then((response) => {
      console.log(response.data.results);
    });
  return (
    <div>
      <div className="text-black text-xl mb-8 font-bold  text-center">
        Trending Movies
      </div>
      <div className="flex ">
        <div
          className="w-[160px] h-[50vh] md:h-[50vh] bg-center bg-contain hover:scale-110 duration 300 flex items-end  rounded-xl m-2 "
          style={{
            backgroundImage:
              "url(https://therunngun.com/wp-content/uploads/2023/11/John-Wick-Composite-Low-Rez-768x1152.jpg)",
          }}
        >
          <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-50 p-2 rounded-b-xl">
            John Wick
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
