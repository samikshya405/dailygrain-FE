import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import featured from "../../assets/image/menu/featured.jpg";
import vegan from "../../assets/image/menu/vegan.webp";
import chicken from "../../assets/image/menu/chicken.jpeg";
import gluten from "../../assets/image/menu/gluten.jpeg";
import lowCal from "../../assets/image/menu/lowCal.webp";
import MenuCard from "../../component/common/MenuCard";

const FeaturedMeal = () => {
  return (
    <Container >
      <h2 style={{ color: "#004d40" }} className="py-4">
        Menu Highlights
      </h2>
      <Row>
        <Col xs={12} md={12} lg={6}>
          <div
            style={{
              backgroundColor: "#f8f7f5",
              height: "500px",
              color: "#004d40",
            }}
          >
            <MenuCard img={featured} title={"High Protein"} />
          </div>
        </Col>
        <Col className="d-flex flex-column gap-4" xs={12} md={12} lg={6}>
          <Row>
            <Col xs={6} md={6} lg={6}>
              <div
                style={{
                  backgroundColor: "#f8f7f5",
                  height: "238px",
                }}
              >
                <MenuCard img={vegan} title={"Vegan"} />
              </div>
            </Col>
            <Col xs={6} md={6} lg={6}>
              <div
                style={{
                  backgroundColor: "#f8f7f5",
                  height: "238px",
                }}
              >
                <MenuCard img={gluten} title={"Gluten Free"} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6} lg={6}>
              <div
                style={{
                  backgroundColor: "#f8f7f5",
                  height: "238px",
                }}
              >
                <MenuCard img={chicken} title={"Chicken"} />
              </div>
            </Col>
            <Col xs={6} md={6} lg={6}>
              <div
                style={{
                  backgroundColor: "#f8f7f5",
                  height: "238px",
                }}
              >
                <MenuCard img={lowCal} title={"Low Calorie"} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedMeal;
