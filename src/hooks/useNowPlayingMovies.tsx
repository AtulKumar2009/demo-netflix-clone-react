import { useDispatch } from 'react-redux';
import { API_OPTIONS, NOW_PLAYING_API } from '../utils/constants';
import { addNowPlayingMovies, type Movie } from '../utils/moviesSlice';
import { useEffect } from 'react';

const mapMovies = (json: Movie[]) => {
  return json.map((movie) => ({
    id: movie.id,
    original_title: movie.original_title,
    overview: movie.overview,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
  }));
};

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(mapMovies(json.results)));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
