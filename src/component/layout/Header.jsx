import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import CustomButton from "../common/CustomButton";
import logo from "../../assets/logo/logo.svg";

const Header = () => {
  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <Link to="/" className="logo navbar-brand">
          <img src={logo} alt="Dailygrain" style={{ width: "150px" }} className="p-2" />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
          <div>
            <CustomButton title={"Login"} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
