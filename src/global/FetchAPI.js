import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../config/keys";
const URL = "https://gateway.marvel.com/v1/public";

class FetchAPI {
    getCharacters = createAsyncThunk(
        "characters/getCharacters", 
    async () => {
        const res = await fetch(`${URL
            }/characters?ts=1&apikey=${
                config.api_key}&hash=${
                    config.hash_key}`);
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
                    config.api_key}&hash=${
                        config.hash_key}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data.data.results;
    });
};

export const API = new FetchAPI();


