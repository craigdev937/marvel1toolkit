import { configureStore } from "@reduxjs/toolkit";
import { CharacterReducer } from "./CharacterSlice";
import { SearchReducer } from "./SearchSlice";

export const Reducer = configureStore({
    reducer: {
        characters: CharacterReducer,
        searches: SearchReducer
    },
});



