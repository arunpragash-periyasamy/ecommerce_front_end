import { useDispatch, useSelector } from "react-redux";
import CheckoutGrid from "./CheckoutGrid";
import UserForm from "./UserForm";
import ShippingForm from "./ShippingForm";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { alertMessage } from "../../utils/customHooks";
import axiosInstance from "../../utils/axiosInstance";
import { clearCart } from "../../utils/Redux/cartSlice";

const Checkout = () => {
  const dispatch =  useDispatch();
  const data = useSelector((store) => store.cart.items);
  const[userForm, setUserForm] = useState(false);
  const[userFormData, setUserFormData] = useState(null);
  const[shippingForm, setShippingForm] = useState(false);
  const[shippingFormData, setShippingFormData] = useState(null);
  const[total, setTotal] = useState(0);
  const navigate = useNavigate();
  const validUserForm = (callback)=>{
    setUserForm(callback());
  }
  const validShippingForm = (callback)=>{
    setShippingForm(callback());
  }

  const handleOrder = async () =>{
    try{
      if(!userForm){
        alertMessage("Invalid user data","error")
        return;
      }
      if(!shippingForm){
        alertMessage("Invalid shipping data","error")
        return;
      }
      if(userForm && shippingForm && data.length !== 0){
        const data = {userContact:userFormData, shippingInfo:shippingFormData}
        const response = await axiosInstance.post("/order",data);
        alertMessage(response.data.message,"success");
        dispatch(clearCart());
        navigate("/orders");
      }
      else if(data.length === 0){
        alertMessage("Cart is empty","error");
        navigate("/");
      }
      else{
        alertMessage("Enter Valid details","error")
      }
    }catch(err){
      console.log(err);
      // if(err?.response?.status === 401){
      //   alertMessage("Authorization expired","error");
      // }
      alertMessage(err?.response?.data?.message,"error")
    }
  }

  useEffect(()=>{
    getFormData();
  },[])
  const getFormData = async () => {
    try{
      const data = await axiosInstance.get("/order/shipping");
      if(data?.data){
        const{userContact, shippingInfo}=data?.data?.shipping;
        setUserFormData(userContact);
        setShippingFormData(shippingInfo);
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-4">
              {/* <!-- Checkout --> */}
              <div className="card shadow-0 border">
                <div className="p-4">
                  <h5 className="card-title mb-3">Contact Details</h5>
                  

                  <UserForm validUserForm={validUserForm} formData={(data)=>setUserFormData(data)} userData={userFormData}/> 
                  <hr className="my-4" />

                  <h5 className="card-title mb-3">Shipping info</h5>
                  

                  <ShippingForm validShippingForm={validShippingForm} formData={(data)=>setShippingFormData(data)} shippingData={shippingFormData}/>
                  <div className="float-end">
                    <Link to={'/cart'}><button className="btn btn-light border">Cancel</button></Link>
                    <button className="btn btn-success shadow-0 border" onClick={handleOrder}>
                      Continue
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Checkout --> */}
            </div>
            <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <div
                className="ms-lg-4 mt-4 mt-lg-0"
                style={{ maxWidth: "320px" }}
              >
                <h6 className="mb-3">Summary</h6>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">${total.toFixed(2)}</p>
                </div>
                {/* <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-danger">- $60.00</p>
                </div> */}
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping cost:</p>
                  <p className="mb-2">+ $0</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">${total.toFixed(2)}</p>
                </div>

                {/* <div className="input-group mt-3 mb-4">
                  <input
                    type="text"
                    className="form-control border"
                    name=""
                    placeholder="Promo code"
                  />
                  <button className="btn btn-light text-primary border">
                    Apply
                  </button>
                </div> */}

                <hr />
                <h6 className="text-dark my-4">Items in cart</h6>
                {data.map((product) => {
                  return (
                    <CheckoutGrid key={product.productId} product={product} total={(price)=>setTotal(prev=>prev+price)}/>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
