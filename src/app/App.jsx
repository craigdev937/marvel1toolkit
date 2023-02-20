import React from "react";
import "./App.css";
import Victor from "/Infamous1.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Victor} alt="Victor Von Doom" 
                height="500px" width="auto"
            />
        </React.Fragment>
    );
};


