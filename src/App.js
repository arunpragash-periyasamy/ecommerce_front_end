import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Carousel from "./components/Carousel";

const router = createBrowserRouter([{
    path:"/",
    element:<><Navbar/><Carousel/><Footer/></>,
    errorElement:<Error/>
},
{
    path:"/carousel",
    element:<Carousel/>,
    errorElement:<Error/>
}
])
const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
