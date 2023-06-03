import FethMovies from 'api/FethMovies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Content, Li, Title, Ul } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    FethMovies(`movie/${movieId}/reviews`).then(mov => {
      setReviews(mov.results);
    });
  }, [movieId]);

  return (
    <>
      <Ul>
        {reviews &&
          reviews.map(({ id, author, content }) => {
            return (
              <Li key={id}>
                <Title>{author}</Title>
                <Content>{content}</Content>
              </Li>
            );
          })}
      </Ul>
    </>
  );
};

export default Reviews;
