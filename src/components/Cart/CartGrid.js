import { useEffect } from "react";
import { useTruncateTitle } from "../../utils/customHooks";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/Redux/cartSlice";
import { Link } from "react-router-dom";

const CartGrid = ({ product, setTotal }) => {
  const price = product.price*product.quantity;
  const dispatch = useDispatch();
  const handleRemoveItem = async () => {
    try {
      dispatch(removeItem(product.productId));
      setTotal(-price);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    setTotal(price)
  },[])
  return (
    <div className="card mb-3">
      {product && (
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
                  <h5>{useTruncateTitle(product.title)}</h5>
                </div>
              </div>
            </Link>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "50px" }}>
                <h5 className="fw-normal mb-0">{product.quantity}</h5>
              </div>
              <div style={{ width: "80px" }}>
                <h5 className="mb-0">
                  ${price.toFixed(2)}
                </h5>
              </div>
            </div>
            <p style={{ color: "red" }} onClick={handleRemoveItem}>
              <i className="fas fa-trash-alt"></i>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartGrid;
