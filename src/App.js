import Navbar from "./components/Navbar";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{
    path:"/",
    element:<Navbar/>,
    errorElement:<Error/>
}
])
const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
