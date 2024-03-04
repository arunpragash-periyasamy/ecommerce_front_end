function NavbarElement() {
  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg rounded-bottom">
        <div className="container-fluid">
          <a className="navbar-brand navbar-logo mr-auto" href="#">
            GUVI
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbarSupportedContent" id="navbarNav">
    <ul className="navbar-nav me-auto ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  <i className="fa fa-home"></i> Home
                </a>
              </li>
              <li className="nav-item" id="electronics_nav_item">
                <a
                  className="nav-link"
                  href="./category.html?category=electronics"
                >
                  {" "}
                  Electronics
                </a>
              </li>
              <li className="nav-item" id="jewelery_nav_item">
                <a
                  className="nav-link"
                  href="./category.html?category=jewelery"
                >
                  {" "}
                  Jewelry
                </a>
              </li>
              <li className="nav-item" id="men's clothing_nav_item">
                <a
                  className="nav-link"
                  href="./category.html?category=men's clothing"
                >
                  {" "}
                  Men's Clothing
                </a>
              </li>
              <li className="nav-item" id="women's clothing_nav_item">
                <a
                  className="nav-link"
                  href="./category.html?category=women's clothing"
                >
                  {" "}
                  Women's Clothing
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="./signIn.html?page=login">
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./signIn.html?page=signin">
                  <i className="fa-solid fa-user-plus"></i> Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./cart.html">
                  <i className="fa-solid fa-cart-shopping"></i> Cart
                </a>
              </li>
            </ul>
    </div>
  </div>
</nav>
  );
}

export default NavbarElement;