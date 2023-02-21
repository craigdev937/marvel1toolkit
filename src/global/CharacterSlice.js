import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    characters: [],
    loading: false
};

const CharacterSlice = createSlice({
    name: "characters",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.getCharacters.rejected, 
        (state) => {
            state.loading = false
        }),
        builder.addCase(API.getCharacters.pending, 
        (state) => {
            state.loading = true
        }),
        builder.addCase(API.getCharacters.fulfilled, 
        (state, action) => {
            state.loading = false,
            state.characters = [...action.payload]
        })
    },
});

export const CharacterReducer = CharacterSlice.reducer;


