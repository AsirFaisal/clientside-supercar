import { useParams } from "react-router";
import { Card, Form, Button } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import useAuth from "../hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";

const PlaceOrder = () => {
  const DateRef = useRef();
  const adrsRef = useRef();

  const { serviceId } = useParams();
  const [data, setData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5005/cars")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const item = data.find((datas) => datas.id == serviceId);
  console.log(item);
  console.log(serviceId);
  console.log(data);
  const handleAddUser = (e) => {
    const name = user.displayName;
    const email = user.email;
    const car = item.name;
    const date = DateRef.current.value;
    const address = adrsRef.current.value;

    const newUser = { name, email, car, date, address };

    fetch("http://localhost:5005/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Booking Confirmed.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Navigation />
      <h2 className="text-center mb-5 mt-5">Confirm Your Booking</h2>
      <div className="row ms-5">
        <div className="col-12 col-lg-6">
          <Card style={{ width: "30rem" }}>
            <Card.Img className="img-fluid" variant="top" src={item?.img} />
            <Card.Body>
              <Card.Title>Car name : {item?.name}</Card.Title>
              <Card.Text>Model:{item?.model}</Card.Text>
              <Card.Text>Price : ${item?.price}</Card.Text>
              <Card.Text>Manufacturer:{item?.Manufacturer}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-lg-4  me-5 bg-light text-dark">
          <h2>Purchase Form</h2>
          <Form onSubmit={handleAddUser}>
            <Form.Group className="mb-3 bg-light" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="bg-light"
                type="email"
                placeholder={user.email}
                value={user.email}
                disabled="true"
              />
              <Form.Text>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="bg-light"
                type="text"
                placeholder={user.name}
                value={user.displayName}
                disabled="true"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Car Name</Form.Label>
              <Form.Control
                className="bg-light"
                type="text"
                value={item?.name}
                disabled="true"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                ref={adrsRef}
                type="text"
                placeholder={"Enter address "}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Delivery Date</Form.Label>
              <Form.Control
                ref={DateRef}
                type="date"
                placeholder={"Enter booking date"}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
