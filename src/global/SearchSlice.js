import { createSlice } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";

const initialState = {
    searches: [],
    loading: false
};

const SearchSlice = createSlice({
    name: "searches",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.searchCharacters.rejected, 
        (state) => {
            state.loading = false
        }),
        builder.addCase(API.searchCharacters.pending, 
        (state) => {
            state.loading = true
        }),
        builder.addCase(API.searchCharacters.fulfilled, 
        (state, action) => {
            state.loading = false,
            state.searches = action.payload
        });
    },
});

export const SearchReducer = SearchSlice.reducer;



