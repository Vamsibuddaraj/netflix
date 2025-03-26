import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addMovieTrailer } from "../utils/movieSlice"
const useGetMovieVideos = (movieId) => {
    const dispatch = useDispatch()
    const getMovieTrailer = async () => {
        const data  = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
        const jsonres =await data.json()
        const trailers = jsonres.results.filter(clip=>clip.type=="Trailer")
        const trailer = trailers.length?trailers[0]:jsonres.results[0]
        ("SDsdsdsdsdsdsd",trailer)
        dispatch(addMovieTrailer(trailer))
    }
    useEffect(()=>{
        getMovieTrailer()
    },[movieId])

}

export default useGetMovieVideos