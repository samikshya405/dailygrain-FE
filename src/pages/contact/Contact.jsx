import React from "react";
import Header from "../../component/layout/Header";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import background from "../../assets/image/background.jpeg";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="main" style={{ backgroundImage: `url(${background})` }}>
        <div className="overlay d-flex justify-content-center align-items-center">
          <div
            className="content px-3 py-5
           rounded"
          >
            <Form className="p-4 rounded shadow-sm bg-white">
              <h2 className="text-center mb-4">Get In Touch</h2>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
