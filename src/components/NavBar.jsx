import React from "react";
import MovieLogoCopy from "../assets/MovieLogo copy.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-1 py-2">
      <img src={MovieLogoCopy} alt="movielogo" className="w-[40px]" />
      <Link to="/" className="text-blue-400">
        Movies
      </Link>
      <Link to="/WatchList" className="text-blue-400">
        WatchList
      </Link>
    </div>
  );
};

export default NavBar;
