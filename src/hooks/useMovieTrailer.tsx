import { useDispatch } from 'react-redux';
import { API_OPTIONS, VIDEOS_API } from '../utils/constants';
import { addTrailerVideo, type Video } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(VIDEOS_API(movieId), API_OPTIONS);
    const json = await data.json();
    const trailers: Video[] = json.results.filter(
      (video: Video) => video.type === 'Trailer'
    );
    const trailer: Video = trailers.length ? trailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};
export default useMovieTrailer;
