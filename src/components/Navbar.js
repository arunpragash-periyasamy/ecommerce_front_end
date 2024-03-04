import NavList from "./NavList";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg rounded-bottom">
      <div className="container-fluid">
        <a className="navbar-brand navbar-logo mr-auto" href="#">
          GUVI
        </a>
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
              name={"Home"}
              icon={<i className="fa fa-home"></i>}
              status="active"
            />
            <NavList
              name={"Electronics"}
              icon={<i className="fa-regular fa-lightbulb"></i>}
            />
            <NavList name={"Jewelry"} icon={<i className="fa-solid fa-ring"></i>} />
            <NavList
              name={"Men's Clothing"}
              icon={<i className="fa-solid fa-shirt"></i>}
            />
            <NavList
              name={"Women's Clothing"}
              icon={<i className="fa-solid fa-vest-patches"></i>}
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
