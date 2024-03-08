import { useEffect } from "react";

const CheckoutGrid = ({product, total}) =>{
  const {title, price, quantity,image} = product;
  useEffect(()=>{
    total(price*quantity);
  },[])
    return(
        <div className="d-flex align-items-center mb-4">
    <div className="me-3 position-relative">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
        1
      </span>
      <img src={image} style={{height: "96px", width: "96x"}} className="img-sm rounded border" />
    </div>
    <div className="">
      <a href="#" className="nav-link">
        {title} <br />
        {quantity}
      </a>
      <div className="price text-muted">Total: ${price*quantity}</div>
    </div>
  </div>
    )
}

export default CheckoutGrid;