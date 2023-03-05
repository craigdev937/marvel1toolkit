import React from "react";
import { Link } from "react-router-dom";

export const SearchInfo = ({ search }) => {
    return (
        <React.Fragment>
            <aside>
                <h1>{search.name}</h1>
                <p>{`id: ${search.id}`}</p>
                <img 
                    alt={search.name}
                    src={`${search.thumbnail.path
                    }.${search.thumbnail.extension}`} 
                />
                <Link to={`/${search.id}`}>Details</Link>
            </aside>
        </React.Fragment>
    );
};


