import { API_OPTIONS, GET_POPULAR_MOVIES } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addPopularMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const usePopularMovies = () => {
    console.log("usePopularMovies is called")
    const popularMovies =useSelector(store=>store.popularMovies)
    const dispatch = useDispatch()
    const getMovies = async () => {
        const data  = await fetch(GET_POPULAR_MOVIES,API_OPTIONS)
        const jsonres =await data.json()
        dispatch(addPopularMovies(jsonres.results))
    }
    useEffect(()=>{
        !popularMovies && getMovies()
    },[])
}

export default usePopularMovies