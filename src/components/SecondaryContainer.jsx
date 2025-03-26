import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const nowPlayingMoviesList  =  useSelector(store=>store.movies.nowPlayingMovies)
  const popularMovies = useSelector(store=>store.movies.popularMovies)
  return (
    <div className='bg-black'>
      <div className='relative z-30 -mt-50'>
        <MovieList title={"Now Playing"} movies={nowPlayingMoviesList}/>
        <MovieList title={"Popular Movies"} movies={popularMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer