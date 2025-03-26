import { createSlice } from "@reduxjs/toolkit";

const gptSuggestions = createSlice({
    name:"GptSuggestions",
    initialState:false,
    reducers:{
        toggleGptSuggestion:(state)=>{
            return !state
        }
    }
})
export const {toggleGptSuggestion} = gptSuggestions.actions
export default gptSuggestions.reducer