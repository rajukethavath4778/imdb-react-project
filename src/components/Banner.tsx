import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-screen h-[50vh]">
      {/* Background Image */}
      <img 
        src="https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg" 
        alt="Avengers Endgame Banner" 
        className="w-full h-full object-cover"
      />

      {/* John Wick Text Overlay */}
      <div className=" text-white font-bold text-center text-xl md:text-3xl bg-gray-900 w-full bg-opacity-50 px-1 py-2 ">
        John Wick
      </div>
    </div>
  );
};

export default Banner;
