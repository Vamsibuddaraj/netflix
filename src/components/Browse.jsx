import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import PrimaryContainer from "./PrimaryContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import GptSuggestions from './GptSuggestions'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  const gptView = useSelector(store=>store.gptSuggestions.toggleView)
  return (
    <div>
      <Header />
      {
      gptView?<GptSuggestions />:
      <>
        <PrimaryContainer />
        <SecondaryContainer />
      </>
      }
    </div>
  )
}

export default Browse