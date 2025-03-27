export const GET_MOVIES ='https://api.themoviedb.org/3/movie/now_playing?page=1';
// export const GET_MOVIE_TRAILER = `https://api.themoviedb.org/3/movie/${movie_id}/videos`;
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
  }
};
export const BG_LOGO = 'https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg'
export const IMG_CDN = "https://image.tmdb.org/t/p/w500/"

export const GET_POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
export const GET_UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"

export const GOOGLEAI_KEY = import.meta.env.VITE_GOOGLEAI_KEY
// export const SEARCH_MOVIE =  'https://api.themoviedb.org/3/search/movie?query=';
