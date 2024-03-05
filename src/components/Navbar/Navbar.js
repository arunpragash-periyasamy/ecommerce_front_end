import NavList from "./NavList";
import { Link, useLocation, useParams } from "react-router-dom";
import { useRemoveSpaces } from "../../utils/customHooks";
function Navbar() {
  let { category } = useParams();
  category = (category === undefined) ? "" :useRemoveSpaces(category);
  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg rounded-bottom">
      <div className="container-fluid">
        <Link
          className="navbar-brand navbar-logo mr-auto"
          to="https://www.guvi.in"
        >
          GUVI SHOP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbarSupportedContent"
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto ml-auto">
            
            <li className={`nav-item ${((category==='home' || category === '')? 'active' : '')}`} id="home">
              <Link className="nav-link" to="/">
                <i className="fa fa-home"></i>
                Home
              </Link>
            </li>
            <li className={`nav-item ${(category==='electronics' ? 'active' : '')}`} id="electronics">
              <Link className="nav-link" to="/electronics">
              <i className="fa-regular fa-lightbulb"></i>
                Electronics
              </Link>
            </li>
            
            <NavList
              name={"jewelery"}
              icon={<i className="fa-solid fa-ring"></i>}
              status={category === "jewelery"}
            />
            <NavList
              name={"men's Clothing"}
              icon={<i className="fa-solid fa-shirt"></i>}
              status={category === "men'sclothing"}
            />
            <NavList
              name={"women's Clothing"}
              icon={<i className="fa-solid fa-vest-patches"></i>}
              status={category === "women'sclothing"}
            />
          </ul>
          <ul className="navbar-nav ml-auto">
            <NavList
              name="Login"
              icon={<i className="fa-solid fa-right-to-bracket"></i>}
            />
            <NavList
              name="Sign Up"
              icon={<i className="fa-solid fa-user-plus"></i>}
            />
            <NavList
              name="Cart"
              icon={<i className="fa-solid fa-cart-shopping"></i>}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
