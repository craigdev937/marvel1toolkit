import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Search } from "../pages/Search";

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
                path: "/search",
                element: <Search />,
                errorElement: <NotFound />
            },
            {
                path: "/:id",
                element: <Detail />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <main className="main">
                <RouterProvider router={ReactRouter} />
            </main>
        </React.Fragment>
    );
};


