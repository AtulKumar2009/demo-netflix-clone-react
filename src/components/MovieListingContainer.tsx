import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import type { RootState } from '../utils/appStore';

const MovieListingContainer = () => {
  const movies = useSelector((state: RootState) => state.movies);
  return (
    <div className="bg-black">
      <div className="-mt-0 md:-mt-16 lg:-mt-20 xl:-mt-40 2xl:-mt-48 md:pl-4 md:pl-12 relative z-20">
        <MovieList
          title={'Now Playing'}
          movies={movies.nowPlayingMovies ?? []}
        />
        <MovieList title={'Popular'} movies={movies.popularMovies ?? []} />
      </div>
    </div>
  );
};

export default MovieListingContainer;
