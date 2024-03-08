import { useEffect } from "react";
import { Link } from "react-router-dom";

const OrderProductGrid = ({product,setTotal}) => {
  console.log(product);
  useEffect(()=>{
    setTotal(product.quantity*product.price);
  },[])
  return (
    <div className="row no-gutters mt-3">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <Link
              to={`/products/${product.productId}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="d-flex flex-row align-items-center">
                <div>
                  <img
                    src={product?.image}
                    className="img-fluid rounded-3"
                    alt="Shopping item"
                    style={{ width: "65px" }}
                  />
                </div>
                <div className="ms-3">
                  <h5>{product.title}</h5>
                </div>
              </div>
            </Link>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "250px" }}>
                <h5 className="fw-normal mb-0">{product.quantity}</h5>
              </div>
              <div style={{ width: "100px" }}>
                <h5 className="mb-0">${(product.quantity*product.price).toFixed(2)}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProductGrid;
