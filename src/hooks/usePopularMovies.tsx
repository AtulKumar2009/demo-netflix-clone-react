import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, POPLUR_MOVIES_API } from '../utils/constants';
import { addPoplularMovies, type Movie } from '../utils/moviesSlice';
import { useEffect } from 'react';
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

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );
  const getPopularMovies = async () => {
    const data = await fetch(POPLUR_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addPoplularMovies(mapMovies(json.results)));
  };
  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
};
