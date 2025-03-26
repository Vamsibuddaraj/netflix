import { API_OPTIONS, GET_UPCOMING_MOVIES } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const useUpcomingMovies = () => {
    console.log("useUpcomingMovies is called")
    const dispatch = useDispatch()
    const getMovies = async () => {
        const data  = await fetch(GET_UPCOMING_MOVIES,API_OPTIONS)
        const jsonres =await data.json()
        dispatch(addUpcomingMovies(jsonres.results))
    }
    useEffect(()=>{
        getMovies()
    },[])
}

export default useUpcomingMovies