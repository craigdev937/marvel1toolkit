import { configureStore } from "@reduxjs/toolkit";
import { CharacterReducer } from "./CharacterSlice";

export const Reducer = configureStore({
    reducer: {
        characters: CharacterReducer,
        search: () => "Marvel Characters"
    },
});



