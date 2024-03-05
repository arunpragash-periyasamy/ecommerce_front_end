import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App";
import Error from "./src/components/Error";
import CategorySection from "./src/components/Category/CategorySection";
import Home from "./src/components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/home",
            element: <Home/>
        },
        {
            path:"/electronics",
            element: <CategorySection category={"electronics"}/>
        },
        {
            path:"/men'sclothing",
            element: <CategorySection category={"men's clothing"}/>
        },
        {
            path:"/jewelery",
            element: <CategorySection category={"jewelery"}/>
        },
        {
            path:"/women'sclothing",
            element: <CategorySection category={"women's clothing"}/>
        },
        {
            path:"/electronics",
            element: <CategorySection category={"electronics"}/>
        },

    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
