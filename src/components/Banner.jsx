import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "axios";

const Banner = () => {
    const [movies, setMovies] = useState(null);
  
    const movie = movies && movies[Math.floor(Math.random() * movies.length)];
  
    useEffect(() => {
      axios.get(requests.requestTrending).then((response) => {
        setMovies(response.data.results);
      });
    }, []);
  
  
    return (
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
            <div className="absolute w-full h-[550px] bg-gradient-to-t from-black"></div>
          <img className= "w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${
    movie?.backdrop_path !== null ? movie?.backdrop_path : movie?.poster_path
  }`} alt={movie?.title} />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title ?? movie?.name}</h1>
          <div className="my-4">
          <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out">Play</button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4 hover:bg-gray-800 hover:border-gray-800 transition duration-300 ease-in-out">Watch Later</button>

          </div>
            <p className="text-sm text-gray-400">Released: {movie?.release_date}</p>
            <p className="text-sm md:text-lg w-[45%]">{movie?.overview}</p>
          </div>
        </div>
      </div>
    );
  };
  
    export default Banner;
