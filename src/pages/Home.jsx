import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";
import { Character } from "../components/Character";

export const Home = () => {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.characters.error);
    const loading = useSelector((state) => state.characters.loading);
    const characters = useSelector((state) => state.characters.characters);

    React.useEffect(() => {
        dispatch(API.getCharacters())
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
        <React.Fragment>
            <h1>Home Page</h1>
            {characters.map((character) => (
                <section key={character.id}>
                    <Character 
                        key={character.id} 
                        character={character} 
                    />
                </section>
            ))}
        </React.Fragment>
    );
};


