import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import HomePage from 'pages/HomePage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import MoviesPage from 'pages/MoviesPage';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
