import {  useSelector } from "react-redux";
import CardDetails from "./CardDetails";
import CartGrid from "./CartGrid";
import { useEffect, useState } from "react";
const Cart = () => {
  const cart = useSelector(store=>store.cart.items);
  console.log(cart)
  const [items, setItems] = useState([]);
  useEffect(()=>{
    setItems(cart)
  },[cart])
  const [total, setTotal] = useState(0);
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7" id="productItems">
                    <h5 className="mb-3">
                      <a href="./index.html" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>
                        Continue shopping
                      </a>
                    </h5>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0" id="noOfItems">
                          You have {items.length} items in your cart
                        </p>
                      </div>
                    </div>
                    {items.map((product, index)=>
                      <CartGrid key={product.productId} product={product}  index={index}  setTotal={(total)=>setTotal(prev=>prev+total)}/>
                    )}
                  </div>
                  <CardDetails total={total}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
