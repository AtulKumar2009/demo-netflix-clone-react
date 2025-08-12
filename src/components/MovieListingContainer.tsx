import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import type { RootState } from '../utils/appStore';

const MovieListingContainer = () => {
  const movies = useSelector((state: RootState) => state.movies);
  return (
    <div className="bg-black">
      <div className="-mt-30 pl-12 relative z-20">
        <MovieList
          title={'Now Playing'}
          movies={movies.nowPlayingMovies ?? []}
        />
        <MovieList title={'Popular'} movies={movies.popularMovies ?? []} />
        {/* <MovieList
          title={'Now Playing'}
          movies={movies.nowPlayingMovies ?? []}
        />
        <MovieList
          title={'Now Playing'}
          movies={movies.nowPlayingMovies ?? []}
        />
        <MovieList
          title={'Now Playing'}
          movies={movies.nowPlayingMovies ?? []}
        /> */}
      </div>
    </div>
  );
};

export default MovieListingContainer;
