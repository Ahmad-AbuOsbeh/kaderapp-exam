import { React, useEffect, useState } from 'react';
import instance from '../API/axios';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import Upcoming from './upcoming/Upcoming';
import './../styles/main.css';

function Main() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [geners, setgeners] = useState([]);

  const [currentPage, setCurrentPage] = useState('upcoming');

  // fetch movies
  async function fetchMovies() {
    // /movie/popular?api_key=f1b8d194dba80bd94de376afc7c19763
    // console.log('REACT_APP_API_KEY', process.env.REACT_APP_API_KEY);

    const responsePopular = await instance.get(`/movie/popular?api_key=${'f1b8d194dba80bd94de376afc7c19763'}`);
    setPopularMovies(responsePopular.data.results);

    const responseTopRated = await instance.get(`/movie/top_rated?api_key=${'f1b8d194dba80bd94de376afc7c19763'}`);
    setTopRatedMovies(responseTopRated.data.results);

    const responseUpcoming = await instance.get(`/movie/upcoming?api_key=${'f1b8d194dba80bd94de376afc7c19763'}`);
    setUpcomingMovies(responseUpcoming.data.results);

    // fetch geners
    const fetchGeners = await instance.get(`/genre/movie/list?api_key=${'f1b8d194dba80bd94de376afc7c19763'}`);
    setgeners(fetchGeners.data.genres);
    console.log('responseUpcoming.data.results', responseUpcoming.data.results);
    console.log('fetchGeners.data.genres', fetchGeners.data.genres);
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <div className='header'>
        <h1 className='title'>Movies</h1>
        {/* <p className='search-box'>Serch box</p> */}
      </div>
      <button onClick={() => setCurrentPage('upcoming')} className={currentPage === 'upcoming' ? 'clicked-button' : 'button'}>
        UPCOMING
      </button>
      <button onClick={() => setCurrentPage('popular')} className={currentPage === 'popular' ? 'clicked-button' : 'button'}>
        POPULAR
      </button>
      <button onClick={() => setCurrentPage('top rated')} className={currentPage === 'top rated' ? 'clicked-button' : 'button'}>
        TOP RATED
      </button>
      <hr />

      {currentPage === 'upcoming' && <Upcoming upcomingMovies={upcomingMovies} geners={geners} />}
      {currentPage === 'popular' && <Popular popularMovies={popularMovies} geners={geners} />}
      {currentPage === 'top rated' && <TopRated topRatedMovies={topRatedMovies} geners={geners} />}
    </div>
  );
}

export default Main;
