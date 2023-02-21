import React from "react";
import "./Media.css";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const Media = () => {
    const [query, setQuery] = React.useState("");
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.searches.loading);
    const searches = useSelector((state) => state.searches.searches);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(API.searchCharacters(query));
        setQuery("");
    };

    if (loading) return <h1>Loading...</h1>;

    return (
        <React.Fragment>
            <h1>Search Character</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={query}
                        placeholder="Search Chracters"
                        onChange={handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </section>
            <section>
                {searches.map((media) => (
                    <aside key={media.id}>
                        <h1>{media.name}</h1>
                        <p>{`id: ${media.id}`}</p>
                        <img 
                            alt={media.name}
                            src={`${media.thumbnail.path
                            }.${media.thumbnail.extension}`} 
                        />
                    </aside>
                ))}
            </section>
        </React.Fragment>
    );
};


