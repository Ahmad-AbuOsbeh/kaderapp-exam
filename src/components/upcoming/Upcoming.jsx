import { React, useEffect, useState } from 'react';
import UpcomingCard from './upcomingCard';
function Upcoming({ upcomingMovies, geners }) {
  return (
    <div className='container'>
      {upcomingMovies.map((movie) => (
        <UpcomingCard movie={movie} geners={geners} />
      ))}
    </div>
  );
}

export default Upcoming;
