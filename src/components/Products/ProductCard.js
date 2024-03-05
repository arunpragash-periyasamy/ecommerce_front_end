const ProductCard = ({product}) =>{
    const truncateTitle = (title) => {
        if (title.length > 20) {
            return title.substring(0, 20) + "...";
        }
        return title;
    }

return(
    <div className="col-md-4 mb-5"><a href="./product.html?id=${product.id}" style={{textDecoration: "none"}}>
  <div className="card">
    <div className="ccc">
      <p className="text-center"><img src={product.image}
          className="imw" style={{objectFit: "contain", width: "100%", height: "200px"}}/></p>
    </div>
    <div className="card-body">
      <h5 className="text-center product-title">{truncateTitle(product.title)}</h5>
      <p className="text-center">Price: $${product.price}</p>
      <p className="text-center"><input type="button" name="Save" value="Buy" className=" cc1"/></p>
    </div>
  </div></a>
  </div>
)
}

export default ProductCard;