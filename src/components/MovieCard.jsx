import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({movie}) => {
    const {poster_path,title} = movie
  return (
    <div className='w-40 mr-3 hover:scale-150'>
        <img alt='movie_logo' src={IMG_CDN+poster_path}/>
    </div>
  )
}

export default MovieCard