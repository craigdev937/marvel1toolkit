import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    characters: [],
    loading: false,
    error: Error
};

const CharacterSlice = createSlice({
    name: "characters",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.getCharacters.rejected, 
        (state, action) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.getCharacters.pending, 
        (state) => {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(API.getCharacters.fulfilled, 
        (state, action) => {
            state.loading = false,
            state.characters = [...action.payload]
        })
    },
});

export const CharacterReducer = CharacterSlice.reducer;


