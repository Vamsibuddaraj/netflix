import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const {nowPlayingMovies,popularMovies,upcomingMovies}  =  useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
      <div className='relative z-30 -mt-50'>
        <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer