import { Link } from "react-router-dom";
import OrderProductGrid from "./OrderProductGrid";
import {useCapitalize} from '../../utils/customHooks';
import { useState } from "react";

const OrderGrid = ({ order }) => {
  const city = order?.shipping?.shippingInfo?.city || "Salem";
  const date = new Date(order?.deliveryDate).toDateString().slice(3);
  const orderId = order?.orderId;
  const orderDate = new Date(order?.createdAt).toDateString().slice(3,);
  const products = order?.items;
  const [total, setTotal] = useState(0);
  return (
    <div className="col-12">
      <div className="list-group mb-5">
        <div
          className="list-group-item p-3 bg-snow"
          style={{ position: "relative" }}
        >
          <div className="row w-100 no-gutters">
            <div className="col-6 col-md">
              <h6 className="text-charcoal mb-0 w-100">Order Number</h6>
              <Link href="" className="text-pebble mb-0 w-100 mb-2 mb-md-0">
                #{orderId}
              </Link>
            </div>
            <div className="col-6 col-md">
              <h6 className="text-charcoal mb-0 w-100">Date</h6>
              <p className="text-pebble mb-0 w-100 mb-2 mb-md-0">
                {orderDate}
              </p>
            </div>
            <div className="col-6 col-md">
              <h6 className="text-charcoal mb-0 w-100">Total</h6>
              <p className="text-pebble mb-0 w-100 mb-2 mb-md-0">${total.toFixed(2)}</p>
            </div>
            <div className="col-6 col-md">
              <h6 className="text-charcoal mb-0 w-100">Shipped To</h6>
              <p className="text-pebble mb-0 w-100 mb-2 mb-md-0">
                {useCapitalize(city)}
              </p>
            </div>
          </div>
        </div>
        <div className="list-group-item p-3 bg-white">
          <div className="row no-gutters">
            <div className="col-12 col-md-12 pr-0 pr-md-3">
              <div className="alert p-2 alert-success w-100 mb-0">
                <h6 className="text-green mb-0">
                  <b>Shipped</b>
                </h6>
                <p className="text-green hidden-sm-down mb-0">
                  Est. delivery {date}
                </p>
              </div>
            </div>
            <div className="row no-gutters mt-3">
                {
                   products && products.map(product=><OrderProductGrid key={product.productId} product={product} setTotal={(price)=>setTotal(price)}/>) 
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderGrid;
