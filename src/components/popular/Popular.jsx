import { React, useEffect, useState } from 'react';
import PopularCard from './PopularCard';
function Popular({ popularMovies, geners }) {
  return (
    <div className='container'>
      {popularMovies.map((movie) => (
        <PopularCard movie={movie} geners={geners} />
      ))}
    </div>
  );
}

export default Popular;
