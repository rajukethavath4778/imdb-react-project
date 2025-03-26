import React, { useState, useEffect } from "react";

const WatchList = () => {
  const [favorites, setFavorites] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currGenre, setCurrGenre] = useState("All genres");
  const [rating, setRating] = useState(0);
  const [popularity, setPopularity] = useState(0);

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem("imdb");
    if (moviesFromLocalStorage) {
      try {
        const parsedMovies = JSON.parse(moviesFromLocalStorage);
        setFavorites(parsedMovies);
      } catch (error) {
        console.error("Failed to parse movies from localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    let temp = favorites.map((movie) => genreids[movie.genre_ids[0]]);
    setGenres(["All genres", ...new Set(temp)]);
  }, [favorites]);

  const genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const filteredArray =
    currGenre === "All genres"
      ? favorites
      : favorites.filter((movie) => genreids[movie.genre_ids[0]] === currGenre);

  if (rating === 1) {
    filteredArray.sort(function (objA, objB) {
      return objA.vote_average - objB.vote_average;
    });
  }
  if (rating === -1) {
    filteredArray.sort(function (objA, objB) {
      return objB.vote_average - objA.vote_average;
    });
  }
  if (popularity === 1) {
    filteredArray.sort(function (objA, objB) {
      return objA.popularity - objB.popularity;
    });
  }
  if (popularity === -1) {
    filteredArray.sort(function (objA, objB) {
      return objB.popularity - objA.popularity;
    });
  }

  const del = (movie) => {
    let newArray = favorites.filter((m) => m.id !== movie.id);
    setFavorites(newArray); // Corrected this line
    localStorage.setItem("imdb", JSON.stringify(newArray));
  };

  return (
    <>
      <div className="mt-4 flex justify-center space-x-1">
        {genres.map((genre) => (
          <button
            key={genre}
            className={
              currGenre === genre
                ? "m-1 text-lg p-1 px-1 bg-blue-400 text-white rounded-xl font-bold"
                : "m-1 text-lg p-1 px-1 bg-gray-400 text-white rounded-xl font-bold"
            }
            onClick={() => setCurrGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md-m-1">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="border-gray-50">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png "
                    className="mr-1"
                    onClick={() => setRating(1)}
                  />
                  <div>Rating</div>
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    className="ml-1"
                    onClick={() => setRating(-1)}
                  />
                </div>
              </th>
              <th>
                <div className="flex">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png "
                    className="mr-1"
                    onClick={() => setPopularity(1)}
                  />
                  <div>Popularity</div>
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    className="ml-1"
                    onClick={() => setPopularity(-1)}
                  />
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genres</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-t border-gray-200">
            {filteredArray.map((movie) => (
              <tr key={movie.id}>
                <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                  <img
                    className="h-[6rem] w-[10rem] object-cover"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                  <div className="ml-4">
                    <div className="font-medium text-gray-700 text-sm">
                      {movie.original_title}
                    </div>
                  </div>
                </td>
                <td className="pl-3 py-4">{movie.vote_average}</td>
                <td className="pl-4 py-4">{movie.popularity}</td>
                <td className="pl-1 py-4">{genreids[movie.genre_ids[0]]}</td>
                <td>
                  <button className="text-red-600" onClick={() => del(movie)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
