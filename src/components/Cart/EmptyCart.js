const EmptyCart = ({message}) => {
  return (
    <div className=" container m-5 p-5 d-flex justify-content-center align-items-center rounded" style={{backgroundColor:"white"}}>
          <i className="fa-solid fa-cart-shopping" style={{fontSize:"400px"}}></i>
            <div>
                <h1 className="fw-bold">{message}</h1>
                <p className="text-muted">Please add items to your cart</p>
            </div>
    </div>
  );
};

export default EmptyCart;
