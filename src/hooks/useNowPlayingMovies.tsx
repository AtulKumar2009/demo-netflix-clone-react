import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, NOW_PLAYING_API } from '../utils/constants';
import { addNowPlayingMovies, type Movie } from '../utils/moviesSlice';
import { useEffect, useCallback } from 'react';
import type { RootState } from '../utils/appStore';

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

  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = useCallback(async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(mapMovies(json.results)));
  }, [dispatch]);
  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, [nowPlayingMovies, getNowPlayingMovies]);
};
