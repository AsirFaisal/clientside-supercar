import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";

const AddCar = () => {
  const package_Ref = useRef();
  const priceRef = useRef();
  const ManufacturerRef = useRef();
  const DescriptionRef = useRef();
  const imgRef = useRef();
  const u_idRef = useRef();

  const handleAddPackage = (e) => {
    const name = package_Ref.current.value;
    const price = priceRef.current.value;
    const Manufacturer = ManufacturerRef.current.value;
    const TopSpeed = DescriptionRef.current.value;
    const img = imgRef.current.value;
    const id = u_idRef.current.value;

    const newPackage = { name, price, Manufacturer, TopSpeed, img, id };
    fetch("http://localhost:5005/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("New Package Added.");
          e.target.reset();
        }
      });
    alert("Added to Database");
    e.preventDefault();
  };

  return (
    <div>
      <div className="col-lg-6 col-12">
        <h3>Add a Car</h3>
        <Form onSubmit={handleAddPackage}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Car Name</Form.Label>
            <Form.Control type="text" placeholder="" ref={package_Ref} />
            <Form.Text className="text-muted">
              Put your Car title here
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="" ref={priceRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control type="text" ref={ManufacturerRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>TopSpeed</Form.Label>
            <Form.Control
              type="number"
              placeholder={"Enter Top Speed Here "}
              ref={DescriptionRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image Link</Form.Label>
            <Form.Control
              type="text"
              placeholder={"Enter Link here"}
              ref={imgRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Unique ID number</Form.Label>
            <Form.Control
              type="number"
              placeholder={"Enter your Unique ID number here "}
              ref={u_idRef}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCar;
