import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [order, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5005/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const my_order = order?.filter((o) => o.email === user.email);
  console.log(my_order);
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5005/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = order.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-name">My Orders</h1>

      <h3>All orders placed :</h3>
      {my_order.map((order) => (
        <div>
          <h2>Email id : {user?.email}</h2>
          <h2>Car Name:{order?.car}</h2>
          <p>Date: {order?.date}</p>
          <p>Address :{order?.address}</p>
          <Button
            className="bg-danger"
            onClick={() => handleDeleteUser(order._id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
