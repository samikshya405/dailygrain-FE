import React from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import CustomButton from "../common/CustomButton";
import logo from "../../assets/logo/logo.svg";

const Header = () => {
  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <Link to="/" className="logo navbar-brand">
          <img src={logo} alt="Dailygrain" style={{ width: "6rem" }} />
        </Link>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${false}`} aria-labelledby={`offcanvasNavbarLabel-expand-${false}`} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
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
              <div>
                <CustomButton title={"Login"} />
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
