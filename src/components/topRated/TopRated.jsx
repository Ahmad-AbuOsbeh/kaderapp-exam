import { React, useEffect, useState } from 'react';
import TopRatedCard from './TopRatedCard';
function TopRated({ topRatedMovies, geners }) {
  return (
    <div className='container'>
      {topRatedMovies.map((movie) => (
        <TopRatedCard movie={movie} geners={geners} />
      ))}
    </div>
  );
}

export default TopRated;
