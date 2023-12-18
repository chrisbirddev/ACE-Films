import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movies = ({ item, customHeight }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-[160px] sm:w-240px lg:w-280px inline-block cursor-pointer relative p-2" style={{ height: customHeight }}>
      <img
        className="w-full h-full block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title ?? item.name}
        style={{ height: '100%', objectFit: 'cover' }}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center overflow-hidden">
          {item?.title ?? item.name}
        </p>
        <p>
          {liked ? (
            <FaHeart className="absolute top-4 right-4 text-grey-300" />
          ) : (
            <FaRegHeart className="absolute top-4 right-4 text-grey-300" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movies;
