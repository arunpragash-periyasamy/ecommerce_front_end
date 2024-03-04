import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>GUVI Shop
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link className="text-reset">
                  Angular
                </Link>
              </p>
              <p>
                <Link className="text-reset">
                  React
                </Link>
              </p>
              <p>
                <Link className="text-reset">
                  Vue
                </Link>
              </p>
              <p>
                <Link className="text-reset">
                  Laravel
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link className="text-reset">
                  Pricing
                </Link>
              </p>
              <p>
                <Link className="text-reset">
                  Settings
                </Link>
              </p>
              <p>
                <Link className="text-reset">
                  Orders
                </Link>
              </p>
              <p>
                <Link className="text-reset">
                  Help
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Chennai, Tamilnadu, India
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                guvi@guvi.in
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 91 9876543210
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 91 9876543201
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4 copyright-background"
      >
        © 2021 Copyright:
        <Link className="text-reset fw-bold" to="https://guvi.in/">
          GUVI
        </Link>
      </div>
    </footer>
  );
};

export default Footer;