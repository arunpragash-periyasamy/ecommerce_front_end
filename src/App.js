import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Carousel from "./components/Carousel/Carousel";
import ProductContainer from "./components/Products/ProductContainer";

const router = createBrowserRouter([{
    path:"/",
    element:<><Navbar/><Carousel/><ProductContainer/><Footer/></>,
    errorElement:<Error/>
},
{
    path:"/productContainer",
    element:<ProductContainer/>,
    errorElement:<Error/>
}
])
const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
