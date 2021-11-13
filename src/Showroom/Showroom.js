import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Showroom = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("./cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <Navigation />
      <h1>
        Available Cars for <span style={{ color: "orange" }}>Purchase</span>
      </h1>
      <div className="row ms-5 me-auto">
        {cars.map((car) => (
          <div className="col-12 col-lg-4 mt-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "18rem", height: "18rem" }}
                variant="top"
                src={car.img}
              />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to={`/cars/${car.id}`}>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}

        <Footer />
      </div>
    </div>
  );
};

export default Showroom;
