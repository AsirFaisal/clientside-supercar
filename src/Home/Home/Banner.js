import React from "react";
import banner from "../../images/banner.JPG";
import banner2 from "../../images/banner2.jpg";
import ferrari from "../../images/ferrari.jpg";
import bmw from "../../images/bmw.jpg";
import { Button } from "react-bootstrap";
const Banner = () => {
  return (
    <div>
      <div className="row">
        <div className="col-8 col-lg-6">
          <img src={banner} alt="banner" />
        </div>
        <div className="col-12 col-lg-6 mt-5">
          <div className="row">
            <img style={{ width: "75%" }} src={banner2} alt="banner" />
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <img style={{ width: "75%" }} src={ferrari} alt="banner" />
            </div>
            <div className="col-12 col-lg-6">
              <img style={{ width: "75%" }} src={bmw} alt="banner" />
            </div>
          </div>
          <h1 className="text-info">Book your Test Drive</h1>
          <p className="text-danger fw-bold">Super car at Super price </p>
          <Button className="mt-5">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
