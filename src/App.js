
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux';
import appStore from "./utils/Redux/appStore";

const App = () => {
  
  return (
    <>
    <Provider store={appStore}>
        <Navbar />
        <ToastContainer />
        <Outlet />
        <Footer />
        </Provider>
    </>
  );
};

export default App;
