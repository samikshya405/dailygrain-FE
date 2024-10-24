import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bannerone from "../../assets/image/bannerone.webp";

const BannerOne = () => {
  return (
    <div className="banner-one-box my-4 ">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div className="banner-one-image-box ">
            <img src={bannerone} className="banner-one-image" />
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
           <div className="banner-one-image-box p-5">
          <div>
          <h2 className="mb-4 text-center ">Why Dailygrain?</h2>
            <p >
              DailyGrain delivers nutritious, chef-prepared meals tailored to
              your dietary needs, using only fresh, high-quality ingredients.
              With convenient meal plans, eco-friendly packaging, and options
              like vegan, gluten-free, and low-calorie meals, DailyGrain makes
              healthy eating easy for busy professionals and health-conscious
              individuals. Choose DailyGrain for a balanced, hassle-free diet!
            </p>
          </div>
           </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerOne;
