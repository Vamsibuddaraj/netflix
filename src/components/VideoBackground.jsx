import React from 'react'
import useGetMovieVideos from "../hooks/useGetMovieVideos"
import "./videoBackground.css"
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {   
  useGetMovieVideos(movieId)
  const youtubeKey  = useSelector(store=>store.movies?.movieTrailer?.key)
  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
      width="100%" 
      height="100%" 
      src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1&mute=1&loop=0&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      ></iframe>
    </div>
  )
}

export default VideoBackground