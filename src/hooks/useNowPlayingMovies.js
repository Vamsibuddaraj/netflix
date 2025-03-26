import { API_OPTIONS, GET_MOVIES } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
    console.log("useNowPlayingMovies is called")
    const dispatch = useDispatch()
    const getMovies = async () => {
        console.log("GET_MOVIES,API_OPTIONS",GET_MOVIES,API_OPTIONS)
        const data  = await fetch(GET_MOVIES,API_OPTIONS)
        const jsonres =await data.json()
        dispatch(addNowPlayingMovies(jsonres.results))
    }
    useEffect(()=>{
        getMovies()
    },[])
}

export default useNowPlayingMovies