import React from "react";
import Header from "../../component/layout/Header";
import { Row, Col, Card } from "react-bootstrap";
import background from "../../assets/image/background.jpeg";

const meals = [
  { name: "Vegan Buddha Bowl", price: "$12.99" },
  { name: "Grilled Chicken Salad", price: "$14.99" },
  { name: "Gluten-Free Pasta", price: "$11.99" },
  { name: "Low-Calorie Quinoa Wrap", price: "$9.99" },
];

const Menu = () => {
  return (
    <>
      <Header />
      <div className="main" style={{ backgroundImage: `url(${background})` }}>
        <div className="overlay d-flex justify-content-center align-items-center">
          <div
            className="content px-3 py-5
         rounded"
          >
            <h2 className="text-center mb-4">Our Menu</h2>
            <Row className="justify-content-center">
              {meals.map((meal, index) => (
                <Col key={index} md={5} className="mb-4">
                  <Card className="meal-card text-center">
                    <Card.Body>
                      <Card.Title>{meal.name}</Card.Title>
                      <Card.Text className="text-muted">{meal.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
