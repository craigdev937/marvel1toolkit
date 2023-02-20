import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Home } from "../pages/Home";
import { Comic } from "../pages/Comic";
import { Media } from "../pages/Media";

const ReactRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <NotFound />
            },
            {
                path: "/media",
                element: <Media />,
                errorElement: <NotFound />
            },
            {
                path: "/comic",
                element: <Comic />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={ReactRouter} />
        </React.Fragment>
    );
};


