import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../../component/layout/Header";
import background from "../../assets/image/background.jpeg";

const About = () => {
  return (
    <>
      <Header />
      <div className="main" style={{ backgroundImage: `url(${background})` }}>
        <div className="overlay d-flex justify-content-center align-items-center">
          <div
            className="content px-3 py-5
         rounded"
          >
            <h2 className="mb-3">About Us</h2>
            <p className="mb-4">
              We are committed to delivering fresh, healthy meals designed to fit your lifestyle. Whether you're vegan, gluten-free, or looking to eat
              better, we’ve got a plan for you.
            </p>
            <p>
              Prepared by experienced chefs using the freshest ingredients, our meals arrive in eco-friendly packaging, supporting both your health
              and the planet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
