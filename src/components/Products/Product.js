import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PRODUCT_API } from "../../utils/constants";
import CategorySection from "../Category/CategorySection";

const Product = ({})=>{
    const [product, setProduct] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        getData();
    },[id])
    const getData = async()=>{
        const response = await fetch(PRODUCT_API+id);
        const json = await response.json();
        console.log(json);
        setProduct(json);
    }
return(<>

<section className="py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center" id="productDetail">
          

    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product?.image} alt="..." /></div>
  <div className="col-md-6">
      <div className="small mb-1">SKU: BST-498</div>
      <h1 className="display-5 fw-bolder">{(product?.title)}</h1>
      <div className="fs-5 mb-5">
          <span>${product?.price}</span>
      </div>
      <p className="lead">{product?.description}</p>
      <div className="d-flex">
      <div className=" d-flex me-3">
      <button className="btn btn-outline-dark flex-shrink-0" id="incrementBtn" type="button">+</button>
          <input className="form-control text-center " id="quantity" type="num" value="1" style={{maxWidth: "3rem"}} />
          <button className="btn btn-outline-dark flex-shrink-0" id="decrementBtn" type="button">-</button>
          </div>
          <button className="btn btn-outline-dark flex-shrink-0" id="addToCart" type="button">
              <i className="bi-cart-fill me-1"></i>
              Add to cart
          </button>
      </div>
  </div>
    
  </div>
    </div>
</section>
<CategorySection category={product.category} id={product.id}/>;
</>
)
}

export default Product;