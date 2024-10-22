import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css'
import CustomButton from "../common/CustomButton";

const Header = () => {
  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <Navbar.Brand href="#home" className="logo">Dailygrain</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
           
          </Nav>
          <div><CustomButton title={"Login"}/></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
