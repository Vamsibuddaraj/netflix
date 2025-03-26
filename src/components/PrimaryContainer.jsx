import React from 'react'
import { useSelector } from 'react-redux'
import MovieTitle from './MovieTitle'
import VideoBackground from './VideoBackground'

const PrimaryContainer = () => {
    const movies = useSelector(store=>store.movies.nowPlayingMovies)
    if(!movies) return
    const {original_title,overview,id} = movies[6]
  return (
    <div className='relative'>
        <MovieTitle title = {original_title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default PrimaryContainer