import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from "./MovieCard"

const GptSuggestedMovies = () => {
    const gptMovies  =  useSelector(store=>store.gptSuggestions.suggestedMovies)
    console.log("gptmovies",gptMovies)
    if(!gptMovies) return null
  return (
    <div className='w-[100%] absolute scroll-auto'>
            <div className='bg-gray-500 flex justify-center p-3 -mt-[30%]'>
                {gptMovies.filter(movie=>movie).map(movie=><MovieCard key={movie.id} movie={movie} />)}
            </div>
    </div>
  )
}

export default GptSuggestedMovies