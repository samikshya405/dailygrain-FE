import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import choose from "../../assets/image/choose.webp";
import customize from "../../assets/image/customize.png";
import delivered from "../../assets/image/delivered.png";

const HowItWorks = () => {
  return (
    <div className="how-it-works px-2 py-4">
      <Container>
        <div className="how-it-works__header">
          <h1 className="text-center mb-4">How It Works</h1>
          {/* <p className="text-center">
            Simple steps to get healthy meals delivered to your door.
          </p> */}
        </div>
        <div>
          <Row >
            <Col className="d-flex flex-column gap-2 p-2" xs={12} md={12} lg={4}>
              <div className="text-center">
              <img src={choose} width={"70px"} alt="choose-img" />
              </div>
              <div className="fw-bold text-center">
                Step 1: Choose Your Meal plan
              </div>
              <div className="text-center">
                Select a meal divlan that suits your dietary needs and
                preferences.
              </div>
            </Col>
            <Col className="d-flex flex-column gap-2 p-2" xs={12} md={12} lg={4}>
            <div className="text-center">
            <img src={customize} width={"70divx"} alt="choose-img" />
            </div>
              <div className="fw-bold text-center">
                Step 2: Customize Your Meals
              </div>
              <div className="text-center">
                Pick your favorite meals from a variety of fresh, healthy
                options.
              </div>
            </Col>
            <Col className="d-flex flex-column gap-2 p-2" xs={12} md={12} lg={4}>
              <div className="text-center ">
              <img src={delivered} width={"70divx"} alt="choose-img" />
              </div>
              <div className="fw-bold text-center">
                Step 3: Get Meals Delivered
              </div>
              <div className="text-center">
                Sit back and relax while your meals are delivered fresh to your
                door.
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
