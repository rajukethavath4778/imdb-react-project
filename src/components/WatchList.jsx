import React from "react";

const WatchList = () => {
  let movies = [
    {
      id: 1,
      name: "Inception",
      poster: "https://tse3.mm.bing.net/th?id=OIP.XPjLOmeDQ8pLJuj4tBBjPwHaKd&pid=Api",
      rating: 8.8,
      genres: ["Action", "Sci-Fi", "Thriller"],
      popularity: 150.437,
    },
    {
      id: 2,
      name: "The Dark Knight",
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 9.0,
      genres: ["Action", "Crime", "Drama"],
      popularity: 200.123,
    },
    {
      id: 3,
      name: "Interstellar",
      poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      rating: 8.6,
      genres: ["Adventure", "Drama", "Sci-Fi"],
      popularity: 180.456,
    },
    {
      id: 4,
      name: "The Matrix",
      poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      rating: 8.7,
      genres: ["Action", "Sci-Fi"],
      popularity: 170.789,
    },
  ];

  return (

    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md-m-1">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="border-gray-50">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex ">
                <div>Rating</div>
              </div>
            </th>

            <th>
              <div className="flex ">
                <div>Popularity</div>
              </div>
            </th>

            <th>
              <div className="flex ">
                <div>Genres</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 border-t border-gray-200">
{movies.map((movie) => (
  <tr >
    <td className="flex items-center px-6 py-4 font-normal text-gray-900">
      <img className="h-[6rem] w-[10rem] object-fit" src={movie.poster} alt={movie.name} />
      <div className="font-medium text-gray-700 text-sm">{movie.name}</div>
    </td>
    <td className="pl-3 py-4">{movie.rating}</td>
    <td className="pl-4 py-4">{movie.popularity}</td>
    <td className="pl-1 py-4">{movie.genres}</td>
  </tr>
))}
          
        </tbody>
      </table>
    </div>
  );
};
export default WatchList;
