
import { Link, useLocation, useParams } from "react-router-dom";
import { useRemoveSpaces } from "../../utils/customHooks";
import { UseSelector, useSelector } from "react-redux";
function Navbar() {
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);
  let { category } = useParams();
  let {pathname} = useLocation();
  console.log(category)
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
            
            <li className={`nav-item ${((category==='home' || category === '' && pathname!=="/cart")? 'active' : '')}`} id="home">
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
            <li className={`nav-item ${(category==='jewelery' ? 'active' : '')}`} id="jewelery">
              <Link className="nav-link" to="/jewelery">
              <i className="fa-solid fa-ring"></i>
                Jewelery
              </Link>
            </li>
            <li className={`nav-item ${(category==="men'sclothing" ? 'active' : '')}`} id="men'scloting">
              <Link className="nav-link" to="/men's clothing">
              <i className="fa-solid fa-shirt"></i>
                Men's clothing
              </Link>
            </li>
            <li className={`nav-item ${(category==="women'sclothing" ? 'active' : '')}`} id="women'scloting">
              <Link className="nav-link" to="/women's clothing">
              <i className="fa-solid fa-vest-patches"></i>
                Women's clothing
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item`} id="login">
              <Link className="nav-link" to="/login">
              <i className="fa-solid fa-right-to-bracket"></i>
                Login
              </Link>
            </li>
            <li className={`nav-item`} id="signup">
              <Link className="nav-link" to="/signup">
              <i className="fa-solid fa-user-plus"></i>
                Signup
              </Link>
            </li>
            <li className={`nav-item ${(pathname==="/cart" ? 'active' : '')}`} id="cart">
              <Link className="nav-link" to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
                Cart
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
