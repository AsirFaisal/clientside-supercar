import React from "react";
import { Accordion, Button } from "react-bootstrap";
import img1 from "../../../images/about.jpg";

const About = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <img className="img-fluid w-75 mt-5" src={img1} alt="about"></img>
        </div>
        <div className="col-12 col-lg-6 mt-5">
          <h2 className="mb-5 text-primary">About us</h2>
          <h2>Get ready for real time adventure</h2>
          <p className="mt-5 mb-5 ">
            Let’s start your journey with us, your dream will come true. That
            car you waited for is now available for you at the lowest price in
            market.
          </p>
          <Button className="bg-primary">Explore Cars</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
