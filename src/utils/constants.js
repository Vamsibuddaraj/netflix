export const GET_MOVIES ='https://api.themoviedb.org/3/movie/now_playing?page=1';
// export const GET_MOVIE_TRAILER = `https://api.themoviedb.org/3/movie/${movie_id}/videos`;
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGRmYWM4YjRjNzAyMzg3NWViN2I4MWM5ZWQ1ZjU3NyIsIm5iZiI6MTc0Mjg3ODQ0NC4yNzIsInN1YiI6IjY3ZTIzNmVjN2RiOWU3MGM0N2RjNjVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DpjEQkoR4qkXcJi65JAHjDDdtb0XbcuMG_FLQDkZoO0'
  }
};
export const BG_LOGO = 'https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg'
export const IMG_CDN = "https://image.tmdb.org/t/p/w500/"

export const GET_POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
export const GET_UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"