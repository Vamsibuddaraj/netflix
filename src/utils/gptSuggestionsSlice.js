import { createSlice } from "@reduxjs/toolkit";

const gptSuggestions = createSlice({
    name:"GptSuggestions",
    initialState:{
        toggleView:false,
        suggestedMovies:[],
        violatedPrompt:{
            violated:false,
            response:null
        }
    },
    reducers:{
        toggleGptSuggestion:(state)=>{
            state.toggleView = !state.toggleView
        },
        addSuggestedMovieByAI:(state,action)=> {
            state.suggestedMovies = action.payload
        },
        addViolatedPrompt:(state,action)=>{
            state.violatedPrompt.violated = action.payload.violated
            state.violatedPrompt.response = action.payload.response
        }
    }
})
export const {toggleGptSuggestion,addSuggestedMovieByAI,addViolatedPrompt} = gptSuggestions.actions
export default gptSuggestions.reducer