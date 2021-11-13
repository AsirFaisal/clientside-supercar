import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../images/bmw.jpg";

const Features = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("./cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  const newcar = cars.slice(3, 9);
  return (
    <div>
      <h1 className="bg-light mt-5">
        Our Featured <span className="text-primary">Cars</span>
      </h1>
      <div className="row ms-5 me-auto">
        {newcar.map((car) => (
          <div className="col-12 col-lg-4 mt-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "18rem", height: "18rem" }}
                variant="top"
                src={car.img}
              />
              <Card.Body>
                <Card.Title>
                  <h2>{car.name}</h2>
                </Card.Title>
                <Card.Text>
                  <h5>Model year :{car.model}</h5>
                  <h5>Price :{car.price}</h5>
                  <h5>Manufacturer :{car.Manufacturer}</h5>
                  <h5>Top Speed :{car.TopSpeed}</h5>
                </Card.Text>
                <Link to={`/cars/${car.id}`}>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
