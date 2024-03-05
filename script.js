import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App";
import Error from "./src/components/Error";
import CategorySection from "./src/components/Category/CategorySection";
import Home from "./src/components/Home/Home";
import Product from "./src/components/Products/Product";

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
            path:"/:category",
            element: <CategorySection />
        },
        {
            path:"/:category/:id",
            element: <Product/>
        },


    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
