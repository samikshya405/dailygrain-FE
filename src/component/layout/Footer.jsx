import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; // Optional: If you have specific styles for the footer

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We provide nutritious and delicious meals delivered straight to your door. Our mission is to make healthy eating convenient for everyone.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Healthy Meal Delivery Service. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
