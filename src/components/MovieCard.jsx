import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./pagination";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [hovered, setHovered] = useState("");

  // Initialize watchList from localStorage
  useEffect(() => {
    const storedWatchList = localStorage.getItem("imdb");
    if (storedWatchList) {
      setWatchList(JSON.parse(storedWatchList));
    }
  }, []);

  // Pagination handlers
  const onNext = () => {
    setPageNum(pageNum + 1);
  };
  const onPrevious = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  // Watchlist handlers
  const addWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    localStorage.setItem("imdb", JSON.stringify(newWatchList)); // Save the updated watchList
  };

  const removeWatchList = (movie) => {
    const filteredWatchList = watchList.filter((m) => m.id !== movie.id);
    setWatchList(filteredWatchList);
    localStorage.setItem("imdb", JSON.stringify(filteredWatchList)); // Save the updated watchList
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
            key={movie.id}
            onMouseOver={() => showButton(movie.id)}
            onMouseLeave={() => hideButton()}
            className="relative w-[150px] h-[50vh] md:h-[50vh] bg-center bg-contain hover:scale-110 duration-300 flex items-end rounded-xl m-2"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
            }}
          >
            <div
              className="p-2 bg-gray-900 rounded-xl absolute right-1 top-1"
              style={{ display: hovered === movie.id ? "block" : "none" }}
            >
              {watchList.some((m) => m.id === movie.id) === false ? (
                <div onClick={() => addWatchList(movie)}>🥰</div>
              ) : (
                <div onClick={() => removeWatchList(movie)}>❌</div>
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
