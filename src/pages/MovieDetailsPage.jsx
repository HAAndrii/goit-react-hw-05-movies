import FethMovies from 'api/FethMovies';
import MovieItem from 'components/MovieItem/MovieItem';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Li, Link, LinkBack, Ul } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    FethMovies(`movie/${movieId}`).then(mov => {
      setMovie(mov);
    });
  }, [movieId]);

  console.log('movie', movie);
  return (
    <main>
      <LinkBack to={location.state ? location.state : '/'}>
        Back to movies
      </LinkBack>

      {movie && <MovieItem film={movie}></MovieItem>}
      <h2>Additional information</h2>
      <Ul>
        <Li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </Li>

        <Li>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </Li>
      </Ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;
