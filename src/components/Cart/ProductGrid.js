import axios from "axios";
import { useEffect, useState } from "react";
import { PRODUCT_API } from "../../utils/constants";
import { useTruncateTitle } from "../../utils/customHooks";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/Redux/cartSlice";
import axiosInstance from "../../utils/axiosInstance";

const ProductGrid = ({product, index, deleteItem, setTotal}) =>{
    const dispatch = useDispatch();
    const handleRemoveItem = async() =>{
        setTotal(-item.price*product.quantity)
        const data ={productId:product.productId};
        console.log(data);
        const response = await axiosInstance.delete(`/cart/item?productId=${product.productId}`);
        console.log(response)
        dispatch(removeItem(product.productId));
    }
    console.log(index)
    const [item, setItem] = useState(null);
    useEffect(()=>{
        getData();
    },[])
    const getData = async () => {
        const response = await axios.get(PRODUCT_API+"/"+product?.productId);
        const price = response.data.price;
        setTotal(price*product.quantity);
        setItem(response.data);
    };
    return(
        <div className="card mb-3">
            {(item) &&
<div className="card-body">
<div className="d-flex justify-content-between">
  <div className="d-flex flex-row align-items-center">
    <div>
      <img
        src={item?.image}
        className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
    </div>
    <div className="ms-3">
      <h5>{useTruncateTitle(item.title)}</h5>
    </div>
  </div>
  <div className="d-flex flex-row align-items-center">
    <div style={{width: "50px"}}>
      <h5 className="fw-normal mb-0">2</h5>
    </div>
    <div style={{width: "80px"}}>
      <h5 className="mb-0">${(item?.price * product.quantity).toFixed(2)}</h5>
    </div>
    <p style={{color: "red"}} onClick={handleRemoveItem}><i className="fas fa-trash-alt"></i></p>
  </div>
</div>
</div>
            }
  
  </div>
    )
}

export default ProductGrid;