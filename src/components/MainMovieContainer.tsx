import { useSelector } from 'react-redux';
import type { RootState } from '../utils/appStore';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainMovieContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );
  if (!movies || movies.length === 0) {
    return <div>No movies found</div>;
  }
  const mainMovie = movies[0];
  const {
    original_title = 'No title',
    overview = 'No overview',
    id = 0,
  } = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainMovieContainer;
