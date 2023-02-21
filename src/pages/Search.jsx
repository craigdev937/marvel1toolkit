import React from "react";
import "./Search.css";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";
import { SearchInfo } from "../components/SearchInfo";

export const Search = () => {
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
                {searches.map((search) => (
                    <aside key={search.id}>
                        <SearchInfo 
                            key={search.id} 
                            search={search}
                        />
                    </aside>
                ))}
            </section>
        </React.Fragment>
    );
};


