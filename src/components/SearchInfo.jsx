import React from "react";

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
            </aside>
        </React.Fragment>
    );
};


