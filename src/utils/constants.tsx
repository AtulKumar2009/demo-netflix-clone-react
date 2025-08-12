export const LOGO =
  'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const USER_ICON =
  'https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_TOKEN,
  },
};

export const NOW_PLAYING_API =
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const POPLUR_MOVIES_API =
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export const VIDEOS_API = (movieId: number) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

export const IMG_CDN_URL = (posterPath: string) =>
  `https://image.tmdb.org/t/p/w500${posterPath}`;
