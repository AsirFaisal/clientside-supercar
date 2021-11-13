import React from "react";
import { Accordion, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import img1 from "../images/about.jpg";
import img2 from "../images/aboutus.jpg";
import Navigation from "../Shared/Navigation/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="col-12 col-lg-6">
          <img className="img-fluid  mt-5" src={img1} alt="about"></img>
        </div>
        <div className="col-12 col-lg-6 mt-5">
          <h2 className="mb-5 text-primary">About us</h2>
          <h2>Get ready for real Power under your seat</h2>
          <p
            style={{ textAlign: "center", width: "75%" }}
            className="mt-5 mb-5 "
          >
            Let’s start your journey with us, your dream will come true. That
            car you waited for is now available for you at the lowest price in
            market.
          </p>
          <Button className="bg-info">Explore Cars</Button>
        </div>
      </div>

      <h1 className="text-info text-center">FAQ</h1>
      <div className="row">
        <div className="col-8 col-lg-5 mt-5 ms-5">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Booking Policy</Accordion.Header>
              <Accordion.Body>
                All our booking policy says you must request refund for 72 hours
                before the tour
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Extra services booking</Accordion.Header>
              <Accordion.Body>
                For extra booking you must pay the regular fees.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Change of Cars</Accordion.Header>
              <Accordion.Body>
                For change of car or variant you cant ask for refunds.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Add ons</Accordion.Header>
              <Accordion.Body>
                All add ons to your Car will be of own cost.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div style={{ alignContent: "right" }} className="col-12 col-lg-6">
          <img className="img-fluid w-50 rounded" src={img2} alt="about"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
