import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Movie = Partial<{
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
}>;

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface MoviesState {
  nowPlayingMovies: Movie[] | null;
  popularMovies: Movie[] | null;
  trailerVideo: Video | null;
}
const initialState: MoviesState = {
  nowPlayingMovies: null,
  popularMovies: null,
  trailerVideo: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
    addPoplularMovies: (state, action: PayloadAction<Movie[]>) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action: PayloadAction<Video>) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addPoplularMovies, addTrailerVideo } =
  moviesSlice.actions;
export default moviesSlice.reducer;
