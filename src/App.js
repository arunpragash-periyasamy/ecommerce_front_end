import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import CategoryContainer from "./components/Category/CategoryContainer";
import Category from "./components/Category/Category";
import CategorySection from "./components/Category/CategorySection";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

export default App;
