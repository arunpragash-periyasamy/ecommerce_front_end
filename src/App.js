import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axiosInstance from "./utils/axiosInstance";
import { alertMessage } from "./utils/customHooks";
import { updateCart } from "./utils/Redux/cartSlice";
import { removeUser } from "./utils/Redux/userSlice";

const App = () => {
  const userName = useSelector((store) => store.user.userName);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const show = pathname !== "/login" && pathname !== "/signup";
  useEffect(() => {
    getCart();
  }, [userName]);

  const getCart = async () => {
    try {
      const data = await axiosInstance.get("/cart/item");
      dispatch(updateCart(data?.data));
    } catch (error) {
      const message = error?.response?.data?.message;
      alertMessage(message, "error");
      if(error?.response?.status === 401){
        localStorage.clear();
        dispatch(removeUser());
        navigate("/");
      }
    }
  };
  return (
    <>
      <ToastContainer />
      {show && <Navbar user={userName} />}
      <Outlet />
      {show && <Footer />}
    </>
  );
};

export default App;
