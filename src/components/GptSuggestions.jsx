import React, { useRef } from 'react'
import { API_OPTIONS, BG_LOGO } from '../utils/constants'
import { model } from '../utils/googleAI'
import { useDispatch, useSelector } from 'react-redux'
import { addSuggestedMovieByAI, addViolatedPrompt } from '../utils/gptSuggestionsSlice'
import GptSuggestedMovies from './GptSuggestedMovies'

const GptSuggestions = () => {
    const dispatch = useDispatch()
    const searchText = useRef(null)
    const {violated,response} = useSelector(store=>store.gptSuggestions.violatedPrompt)
    const searchMovieFromDb = async (movie) => {
        let movieforUrl = movie.replace(" ","%20")
        try{
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieforUrl}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
            const jsonres = await data.json()
            return jsonres
        }catch(err){
            console.log("failed fetching movies")
            return err
        }
    }
    const handleGptSearch = async () => {
        const gptPrompt = `You are a movie suggestion system. Suggest exactly 12 movie names related to the query: "${searchText.current.value}".  
Provide the names as a comma-separated list in square brackets. Example format: Pushpa, Bahubali, Avatar, Salaar.  
If the query violates any policies, return an your response and also include violate as part of your response.`;
        const result = await model.generateContent([gptPrompt]);
        if(result.response.text().includes("violate")){
            dispatch(addViolatedPrompt({violated:true,response:result.response.text()}))
            return null
        }
        const resultArr = result.response.text().split(", ");
        console.log(result.response.text())
        const  moviePromises = resultArr.slice(0,10).map(movie=>searchMovieFromDb(movie))
        const finalMovieList = await Promise.all(moviePromises)
        console.log("lenght--",finalMovieList)
        let processedList = [];
        finalMovieList.forEach((movie, index) => {
            if (movie.results.length > 1) {
                const match = movie.results.find(movie1 => movie1.title === resultArr[index]);
                if (match) {
                    processedList.push(match);
                }
            } else {
                processedList.push(movie.results[0]);
            }
        });
        dispatch(addViolatedPrompt({violated:false,response:null}))
        dispatch(addSuggestedMovieByAI(processedList))
        console.log("finallist",processedList)
    }
    // console.log("viloatedprompt-------",violatedPrompt)
  return (
    <div className='fixed'>
        <img className='opacity-30' src={BG_LOGO} alt='bg-logo'/>
        {/* <div className='w-screen flex justify-center absolute top-40'> */}
        <div className='w-screen flex justify-center absolute -mt-[46%]'>
            <form onSubmit={(e)=>e.preventDefault()} className='bg-black py-6 px-3 w-[50%]'>
                <input  ref={searchText} className='bg-gray-400  w-[70%] px-6 py-4 mx-3 text-white' placeholder='what do you want to watch?'/>
                <button  onClick={handleGptSearch} className='bg-red-600 w-[20%] cursor-pointer text-white px-3  py-3 rounded-xl'>Search</button>
            </form>
        </div>
        {
            violated?<div className='text-white bg-gray-500 p-10 m-10 absolute top-80 h-52'>{response}</div>:<GptSuggestedMovies />
        }
    </div>
  )
}

export default GptSuggestions