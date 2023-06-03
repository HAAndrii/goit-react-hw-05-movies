import FethMovies from 'api/FethMovies';
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Li, Link, Ul } from './HomePage.style';
// import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  useEffect(() => {
    FethMovies('trending/movie/day').then(mov => {
      setMovies(mov.results);
    });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <Ul>
        {movies &&
          movies.map(movie => {
            return (
              <Li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={location}>
                  {movie.title}
                </Link>
              </Li>
            );
          })}
      </Ul>
    </main>
  );
};

export default HomePage;
