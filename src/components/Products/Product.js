import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PRODUCT_API } from "../../utils/constants";
import CategorySection from "../Category/CategorySection";
import axiosInstance from "../../utils/axiosInstance";
import { alertMessage } from "../../utils/customHooks";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/Redux/cartSlice";

const Product = ({}) => {
  const { id } = useParams();
  const cartItems = useSelector((store) => store.cart.itemId);
  const productQuantity = useSelector((store) => store.cart.items);
  const index = productQuantity.findIndex((item) => item.productId === id);
  const [product, setProduct] = useState({});
  const [quantityChanged, setQuantityChanged] = useState(false);
  const [inCart, setInCart] = useState(cartItems.includes(Number(id)));
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = {
    productId: id,
    quantity: quantity,
    image: product?.image,
    price: product?.price,
    title: product?.title
  };

  useEffect(() => {
    getData();
    if (index !== -1) {
      setQuantity(productQuantity[index]?.quantity);
    }
  }, [id]);

  useEffect(() => {
    return async () => {
      if (inCart) {
      }
      if (quantityChanged) {
      }
      if (inCart && quantityChanged) {
        updateData();
      }
    };
  }, [inCart, quantityChanged]);

  const getData = async () => {
    const response = await fetch(PRODUCT_API + id);
    const json = await response.json();
    setProduct(json);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (inCart) {
      setQuantityChanged(true);
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    if (inCart) {
      setQuantityChanged(true);
    }
  };
  const addToCart = async () => {
    if (inCart) {
      navigate("/cart");
    } else {
      setInCart(true);
      updateData();
    }
  };

  const updateData = async () => {
    dispatch(addItem(data));
    try {
      const response = await axiosInstance.post("/cart/item", data);
    } catch (err) {
      if (err?.response?.status === 401) {
        alertMessage("Aunthentication expires", "error");
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div
            className="row gx-4 gx-lg-5 align-items-center"
            id="productDetail"
          >
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={product?.image}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{product?.title}</h1>
              <div className="fs-5 mb-5">
                <span>${product?.price}</span>
              </div>
              <p className="lead">{product?.description}</p>
              <div className="d-flex">
                <div className=" d-flex me-3">
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    id="incrementBtn"
                    type="button"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                  <input
                    className="form-control text-center "
                    id="quantity"
                    type="num"
                    value={quantity}
                    readOnly
                    style={{ maxWidth: "3rem" }}
                  />
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    id="decrementBtn"
                    type="button"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                </div>
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  id="addToCart"
                  type="button"
                  onClick={addToCart}
                >
                  <i className="bi-cart-fill me-1"></i>
                  {inCart ? "Go to Cart" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CategorySection category={product.category} id={product.id} />;
    </>
  );
};

export default Product;
