import FethMovies from 'api/FethMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Li, Ul } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    FethMovies(`movie/${movieId}/credits`).then(mov => {
      setCast(mov.cast);
    });
  }, [movieId]);

  return (
    <>
      <Ul>
        {cast &&
          cast.map(el => {
            return <Li key={el.id}>{el.name}</Li>;
          })}
      </Ul>
    </>
  );
};

export default Cast;
