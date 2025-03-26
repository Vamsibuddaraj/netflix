import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import gptSuggestionsReducer from "./gptSuggestionsSlice"
export const appStore  =  configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gptSuggestions:gptSuggestionsReducer
    }
})