import { API_OPTIONS, GET_MOVIES } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
    console.log("useNowPlayingMovies is called")
    const nowPlayingMovies =useSelector(store=>store.nowPlayingMovies)
    const dispatch = useDispatch()
    const getMovies = async () => {
        const data  = await fetch(GET_MOVIES,API_OPTIONS)
        const jsonres =await data.json()
        dispatch(addNowPlayingMovies(jsonres.results))
    }
    useEffect(()=>{
        !nowPlayingMovies && getMovies()
    },[])
}

export default useNowPlayingMovies