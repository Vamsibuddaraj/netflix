import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return ( 
    movies&&
    <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex-col p-5'>
          <h1 className='text-2xl text-white pb-3 '>{title}</h1>
          <div className='flex'>
              {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
          </div>
        </div>
    </div>
  )
}

export default MovieList