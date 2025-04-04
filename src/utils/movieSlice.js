import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
        popularMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload
        },
        addPopularMovies:(state,action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies:(state,action) => {
            state.upcomingMovies = action.payload;
        }

    }
})

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addUpcomingMovies} = movieSlice.actions
export default movieSlice.reducer