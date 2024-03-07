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
    const cartItems = useSelector(store=>store.cart.itemId);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [quantityChanged, setQuantityChanged] = useState(false);
  const [inCart, setInCart] = useState(cartItems.includes(id));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(cartItems)
  useEffect(() => {
    getData();
    return()=>{
        console.log("Moved out from the product page")
  }
  }, [id]);

  useEffect(()=>{
    return async()=>{
        if(inCart){
            const data ={
                productId: id,
                quantity: quantity,
              }
            dispatch(addItem(data));
            console.log(data)
            try{
                const response = await axiosInstance.post("/cart/item", data);
            }catch(err){
                console.log(err);
            }
        }
        console.log("Moved out from the product page")
  }
  },[])

  const getData = async () => {
    const response = await fetch(PRODUCT_API + id);
    const json = await response.json();
    setProduct(json);
  };

  const handleDecrement = () =>{
    if(quantity>1){
      setQuantity(prev=>prev-1)
    }
    inCart && setQuantityChanged(true);
}

const handleIncrement = () =>{
    setQuantity(prev=>prev+1)
    inCart && setQuantityChanged(true);
}
  const addToCart = async()=>{
    if(inCart)  {navigate('/cart')}else{
        try {
            const data ={
                productId: id,
                quantity: quantity,
              }
              dispatch(addItem(data))
          const response = await axiosInstance.post("/cart/item", data);
          alertMessage(response?.data?.message, "success");
          setInCart(true);
        } catch (error) {
          console.log(error);
        }
      }
    }

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
                  type="button" onClick={addToCart}
                >
                  <i className="bi-cart-fill me-1"></i>
                  {inCart ? "Go to Cart":"Add to cart"}
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
