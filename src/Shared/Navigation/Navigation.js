import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../images/supercarlog.JPG";
import "./Navigation.css";

import { Link, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">SuperCar</div>
        {user?.email ? (
          <div className="navbar__title navbar__item bg-info ">
            <small>Welcome,{user.displayName}</small>
          </div>
        ) : (
          <div></div>
        )}
        <img
          src={logo}
          width="80"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <div className="navbar__item">
          <Link style={{ textDecoration: "none", color: "#F57408" }} to="/home">
            Home
          </Link>
        </div>
        <div className="navbar__item">
          <Link
            style={{ textDecoration: "none", color: "#F57408" }}
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="navbar__item">
          <Link
            style={{ textDecoration: "none", color: "#F57408" }}
            to="/showroom"
          >
            Showroom
          </Link>
        </div>
        <div className="navbar__item">
          <Link
            style={{ textDecoration: "none", color: "#F57408" }}
            to="/contact"
          >
            Contact
          </Link>
        </div>

        {user?.email ? (
          <div>
            <div className="navbar__item">
              <Link
                style={{ textDecoration: "none", color: "#F57408" }}
                to="/dashboard"
              >
                Dashboard
              </Link>
              <Button
                onClick={logout}
                style={{ marginInlineStart: "12px" }}
                className="bg-light"
              >
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <div className="navbar__item">
            <Link
              style={{ textDecoration: "none", color: "#F57408" }}
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navigation;
