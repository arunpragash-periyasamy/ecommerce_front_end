import { alertMessage } from "../../utils/customHooks";
import CardDetailsForm from "./CardDetaisForm";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const CardDetails = ({total, cart}) =>{
  const navigate = useNavigate();
    const[validForm, setValidForm] = useState(false);
    const[cardData, setCardData] = useState({});
    const validateForm = async(callback) =>{
      const valid = await callback();
      setValidForm(valid);
    }
    const handleCheckout = async() =>{
      try{
        if(validForm && cart){
          const response = await axiosInstance.post("/cardDetails",cardData);
          navigate("/checkout");
        }else if(!cart){
          alertMessage("Cart is Empty","error");
        }
        else{
          alertMessage("Enter Valid card details","error")
        }
      }catch(err){
        if(err?.response?.status === 401){
          alertMessage("Aunthentication expires", "error");
          localStorage.clear();
          navigate("/login");
        }
      }
    }
    return(
        <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3"
                            style={{ width: "45px" }}
                            alt="Avatar"
                          />
                        </div>

                        <p className="small mb-2">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-visa fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-amex fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-paypal fa-2x"></i>
                        </a>
                        <CardDetailsForm validate={validateForm} setCardData={(data)=>setCardData(data)}/>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2" id="subTotal">
                            ${total.toFixed(2)}
                          </p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">
                            <s>$0.00</s>
                            <span
                              style={{ color: "yellow", fontWeight: "900" }}
                            >
                              Free
                            </span>
                          </p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2" id="total">
                            ${total.toFixed(2)}
                          </p>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-info btn-block btn-lg"
                          onClick={handleCheckout}
                        >
                          <div className="d-flex justify-content-between">
                            <span id="checkOutPrice">${total.toFixed(2)}</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
    )
}

export default CardDetails;