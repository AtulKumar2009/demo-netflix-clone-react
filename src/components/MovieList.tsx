import type { Movie } from '../utils/moviesSlice';
import MoiveCard from './MoiveCard';

const MovieList = ({ title, movies }: { title: string; movies: Movie[] }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl  text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MoiveCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
