const Cart = () =>{
    return(
        
    <section className="h-100 h-custom" style={{backgroundColor: "#eee"}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
  
              <div className="row">
  
                <div className="col-lg-7" id="productItems">
                  <h5 className="mb-3"><a href="./index.html" className="text-body"><i
                        className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                  <hr/>
  
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p className="mb-1">Shopping cart</p>
                      <p className="mb-0" id="noOfItems">You have 0 items in your cart</p>
                    </div>
                    
                  </div>
  
                  
  
                </div>
                <div className="col-lg-5">
  
                  <div className="card bg-primary text-white rounded-3">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="mb-0">Card details</h5>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          className="img-fluid rounded-3" style={{width: "45px"}} alt="Avatar"/>
                      </div>
  
                      <p className="small mb-2">Card type</p>
                      <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                      <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-visa fa-2x me-2"></i></a>
                      <a href="#!" type="submit" className="text-white"><i
                          className="fab fa-cc-amex fa-2x me-2"></i></a>
                      <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>
  
                      <form className="mt-4">
                        <div className="form-outline form-white mb-4">
                          <input type="text" id="cardHolderName" className="form-control form-control-lg" siez="17"
                            placeholder="Cardholder's Name" required/>
                          <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                        </div>
  
                        <div className="form-outline form-white mb-4">
                          <input type="text" id="cardNumber"  className="form-control form-control-lg" siez="17"
                            placeholder="1234 5678 9012 3457" minLength="19" maxLength="19"  required/>
                          <label className="form-label" >Card Number</label>
                        </div>
  
                        <div className="row mb-4">
                          <div className="col-md-6">
                            <div className="form-outline form-white">
                              <input type="text" id="expiration" className="form-control form-control-lg"
                                placeholder="MM/YYYY" size="7" minLength="7" maxLength="7"  required/>
                              <label className="form-label" htmlFor="typeExp">Expiration</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline form-white">
                              <input type="password" id="cvv"  className="form-control form-control-lg"
                                placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3"  required/>
                              <label className="form-label" >Cvv</label>
                            </div>
                          </div>
                        </div>
  
                      </form>
  
                      <hr className="my-4"/>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2" id="subTotal">$0.00</p>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2"><s>$0.00</s><span style={{color: "yellow", fontWeight: "900"}}>Free</span></p>
                      </div>
  
                      <div className="d-flex justify-content-between mb-4">
                        <p className="mb-2">Total(Incl. taxes)</p>
                        <p className="mb-2" id="total">$0.00</p>
                      </div>
  
                      <button type="submit" className="btn btn-info btn-block btn-lg" >
                        <div className="d-flex justify-content-between">
                          <span id="checkOutPrice">$0.00</span>
                          <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                        </div>
                      </button>
  
                    </div>
                  </div>
  
                </div>
  
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Cart;