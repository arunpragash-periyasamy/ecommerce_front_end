import { useRemoveSpaces, useTruncateTitle } from "../../utils/customHooks";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {

  return (
    <div className="col-md-4 mb-5">
      <Link
        to={"/"+useRemoveSpaces(product.category)+"/"+product.id}  
        style={{ textDecoration: "none" }}
      >
        <div className="card">
          <div className="ccc">
            <p className="text-center">
              <img
                src={product.image}
                className="imw"
                style={{ objectFit: "contain", width: "100%", height: "200px" }}
              />
            </p>
          </div>
          <div className="card-body">
            <h5 className="text-center product-title">
              {useTruncateTitle(product.title)}
            </h5>
            <p className="text-center">Price: $${product.price}</p>
            <p className="text-center">
              <input type="button" name="Save" value="Buy" className=" cc1" />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
