import React from "react";
import { Link } from "react-router-dom";

export const Character = ({char}) => {
    return (
    <React.Fragment>
        <section>
            <h1>{char.name}</h1>
            <img 
                alt={char.name}
                src={`${char.thumbnail.path
                    }.${char.thumbnail.extension}`}
            />
            <p>{char.description}</p>
            <Link to={`/${char.id}`}>Detail</Link>
        </section>
    </React.Fragment>
    );
};


