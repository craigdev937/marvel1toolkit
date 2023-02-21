import React from "react";

export const Character = ({character}) => {
    return (
    <React.Fragment>
        <section>
            <h1>{character.name}</h1>
                <img 
                    alt={character.name}
                    src={`${character.thumbnail.path
                        }.${character.thumbnail.extension}`}
                />
            </section>
    </React.Fragment>
    );
};


