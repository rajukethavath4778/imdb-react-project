import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Banner />
                <MovieCard />
              </div>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
