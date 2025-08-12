import Header from './Header';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainMovieContainer from './MainMovieContainer';
import MovieListingContainer from './MovieListingContainer';
import { usePopularMovies } from '../hooks/usePopularMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <>
      <Header />
      <MainMovieContainer />
      <MovieListingContainer />
    </>
  );
};

export default Browse;
