import React from "react";

const MovieCard = () => {
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
        ></div>
        <div
          className="w-[160px] h-[50vh] md:h-[50vh] bg-center bg-contain hover:scale-110 duration 300 flex items-end  rounded-xl m-2 "
          style={{
            backgroundImage:
              "url(https://therunngun.com/wp-content/uploads/2023/11/John-Wick-Composite-Low-Rez-768x1152.jpg)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default MovieCard;
