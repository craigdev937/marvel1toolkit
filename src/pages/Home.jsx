import React from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";
import { Character } from "../components/Character";

export const Home = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.characters.loading);
    const characters = useSelector((state) => state.characters.characters);

    React.useEffect(() => {
        dispatch(API.getCharacters())
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;

    return (
        <React.Fragment>
            <h1>Home Page</h1>
            {characters.map((char) => (
                <section key={char.id}>
                    <Character 
                        char={char} 
                    />
                </section>
            ))}
        </React.Fragment>
    );
};


