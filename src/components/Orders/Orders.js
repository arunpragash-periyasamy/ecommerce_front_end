import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import OrderGrid from "./OrderGrid";
import EmptyCart from "../Cart/EmptyCart";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);
  const getOrders = async () => {
    try {
      const response = await axiosInstance.get("/order");
      setOrders(response?.data?.orders);
      console.log(orders);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container mt-3 mt-md-5">
        <h2 className="text-charcoal hidden-sm-down">Your Orders</h2>
        <div className="row">
          {orders.map((order) => (
              <OrderGrid key={order.orderId} order={order} />
          ))}
          {orders.length === 0 && <EmptyCart message={"You never purchased before"}/>}
        </div>
      </div>
    </>
  );
};

export default Orders;
