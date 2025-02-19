import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[20vh] md:h-[60vh] w-screen bg-contain bg-no-repeat overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg" 
        alt="Avengers Endgame Banner"
        className="w-full h-full object-cover"
      />

      {/* John Wick Text Overlay (Fixed) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-white font-bold text-xl md:text-3xl bg-gray-900 bg-opacity-50 px-4 py-2 rounded-md text-center">
        John Wick
      </div>
    </div>
  );
};

export default Banner;
