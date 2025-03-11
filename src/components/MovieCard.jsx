import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./pagination";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [hovered, setHovered] = useState("");

  //pagination handlers
  const onNext = () => {
    setPageNum(pageNum + 1);
  };
  const onPrevious = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  //watchlist handler
  const addWatchList = (id) => {
    const newWatchList = [...watchList, id];
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  const removeWatchList = (id) => {
    const filteredWatchList = watchList.filter(
      (watchListId) => watchListId !== id
    );
    setWatchList(filteredWatchList);
    console.log(filteredWatchList);
  };
  const showButton = (id) => {
    setHovered(id);
  };
  const hideButton = () => {
    setHovered("");
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=9982b8ceb05b6fbfc1744f1b8e50f2fd&page=${pageNum}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [pageNum]);

  return (
    <div>
      <div className="text-black text-xl mb-8 font-bold text-center">
        Trending Movies
      </div>
      <div className="flex flex-wrap">
        {movies.map((movie) => (
          <div
            onMouseOver={() => showButton(movie.id)}
            onMouseLeave={() => hideButton(movie.id)}
            key={movie.id}
            className="relative w-[150px] h-[50vh] md:h-[50vh] bg-center bg-contain hover:scale-110 duration-300 flex items-end rounded-xl m-2"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
            }}
          >
            <div
              className="p-2 bg-gray-900 rounded-xl absolute right-1 top-1"
              style={{ display: hovered === movie.id ? "block" : "none" }}//okksai annaku adugutha hover effect how on block
            >
              {watchList.includes(movie.id) === false ? (
                <div onClick={() => addWatchList(movie.id)}>🥰</div>
              ) : (
                <div onClick={() => removeWatchList(movie.id)}>❌</div>
              )}
            </div>
            <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-50 p-2 rounded-b-xl">
              {movie.title}
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination pageNum={pageNum} onNext={onNext} onPrevious={onPrevious} />
      </div>
    </div>
  );
};

export default MovieCard;
