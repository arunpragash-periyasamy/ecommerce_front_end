import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";
import axiosInstance from "./utils/axiosInstance";

const App = () => {
  const {pathname} = useLocation();
  const show = (pathname !== '/login' && pathname !== '/signup');
  return (
    <>
      <Provider store={appStore}>
        <ToastContainer />
        {show && <Navbar />}
        <Outlet />
        {show && <Footer />}
      </Provider>
    </>
  );
};

export default App;
