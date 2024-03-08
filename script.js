import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import CategorySection from "./src/components/Category/CategorySection";
import Home from "./src/components/Home/Home";
import Product from "./src/components/Products/Product";
import Cart from "./src/components/Cart/Cart";
import Authentication from "./src/components/Authentication/Authentication";
import App from "./src/App.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/Redux/appStore";
import Orders from "./src/components/Orders/Orders";
import Checkout from "./src/components/Checkout/Checkout";
import EmptyCart from "./src/components/Cart/EmptyCart.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <Authentication page={"signup"} />,
      },
      {
        path: "/login",
        element: <Authentication page={"login"} />,
      },
      {
        path: "/:category",
        element: <CategorySection />,
      },
      {
        path: "/:category/:id",
        element: <Product />,
      },
      {
        path:"/orders",
        element:<Orders/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      },
      {
        path:"/empty",
        element:<EmptyCart message={"Your cart is empty."}/>
      },
    ],
    errorElement: <Error />,
  },
  
]);

root.render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);
