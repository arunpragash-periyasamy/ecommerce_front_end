import NavList from "./NavList";
import { useContext } from "react";
import ContextApi from "../../utils/ContextApi";
import { Link, useLocation } from "react-router-dom";
import { useRemoveSpaces } from "../../utils/customHooks";
function Navbar() {
  const data = useContext(ContextApi);
  const {pathname} = useLocation();
  const path = useRemoveSpaces(pathname).replace("/","");
  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg rounded-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-logo mr-auto" to="https://www.guvi.in">
          GUVI
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
            <NavList
              name={"home"}
              icon={<i className="fa fa-home"></i>}
              status={path==='home' || path===''}
            />
            <NavList
              name={"electronics"}
              icon={<i className="fa-regular fa-lightbulb"></i>}
              status={path==='electronics'}
            />
            <NavList name={"jewelery"} icon={<i className="fa-solid fa-ring"></i>} status={path==='jewelery'}/>
            <NavList
              name={"men's Clothing"}
              icon={<i className="fa-solid fa-shirt"></i>}
              status={path==="men'sclothing"}
              />
            <NavList
              name={"women's Clothing"}
              icon={<i className="fa-solid fa-vest-patches"></i>}
              status={path==="women'sclothing"}
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
