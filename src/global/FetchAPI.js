import { createAsyncThunk } from "@reduxjs/toolkit";
const api_key = "508fd7e3eb8547721457717c18622fa1";
const hash_key = "5723d651cd486b64567bc252dfcc6307";
const URL = "https://gateway.marvel.com/v1/public";

class FetchAPI {
    getCharacters = createAsyncThunk(
        "characters/getCharacters", 
    async () => {
        const res = await fetch(`${URL
            }/characters?ts=1&apikey=${
                api_key}&hash=${hash_key}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return [...data.data.results];
    });

    searchCharacters = createAsyncThunk(
        "searches/searchCharacters", 
    async (query) => {
        const res = await fetch(`${URL
            }/characters?nameStartsWith=${
                query}&ts=1&apikey=${
                    api_key}&hash=${hash_key}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data.data.results;
    });
};

export const API = new FetchAPI();


