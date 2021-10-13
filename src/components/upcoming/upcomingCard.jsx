import { React, useEffect, useState } from 'react';

function UpcomingCard({ movie, geners }) {
  const [specifcGeners, setSpecifcGeners] = useState([]);
  const [isLargeCard, setIsLargeCard] = useState(false);

  // did mount
  useEffect(() => {
    const genersArray = [];
    for (let i = 0; i <= movie?.genre_ids?.length; i++) {
      for (let j = 0; j <= geners?.length; j++) {
        if (movie.genre_ids[i] === geners[j]?.id) {
          genersArray.push(geners[j]?.name);
        }
      }
    }
    setSpecifcGeners(genersArray);
  }, []);

  return (
    <div onClick={() => setIsLargeCard(!isLargeCard)} className='card'>
      {!isLargeCard && (
        <div>
          <h3 className='rate'>{movie.vote_average}</h3>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='' className='img' />
          <h3>{movie.title}</h3>
          <h6>{movie.release_date}</h6>
          <div className='geners'>
            {specifcGeners.map((gener) => (
              <p>{gener}, </p>
            ))}
          </div>
        </div>
      )}

      {isLargeCard && (
        <div>
          <h3>{movie.title}</h3>
          <p className='rate'>{movie.vote_average}</p>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='' className='largeimg' />
          <h4>{movie.overview}</h4>
          <h4>{movie.popularity}</h4>
          <h4 className='video'>watch video</h4>
          <h4>{movie.release_date}</h4>
          <div className='geners'>
            {specifcGeners.map((gener) => (
              <p>{gener}, </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UpcomingCard;
