import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import placeholder from "./placeholder.png";

function BasicExample() {
  return (
    <Card
      style={{
        width: "100%",
        height: "347px",
        boxShadow: "0px 1px 14px rgba(0, 0, 0, 0.25)",
        borderRadius: "7px",
        border: "none",
      }}
    >
      <div
        className="d-flex align-items-center px-4"
        style={{ height: "100%" }} // Add height to parent div
      >
        <Col>
          <Card.Img
            src={placeholder}
            // style={{ width: "443px", height: "295px" }}
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>
              What Toxic Positivity Looks Like at Work —and How to Deal With It
            </Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing nd typesett
              ingindustry. Lorem Ipsum has been industry's standard dummy text
              ever since 1500s. Lorem Ipsum is simply dummy text of the printing
              nd typesett ingindustry. Lorem Ipsum has been industry's standard
              dummy text ever since 1500s.
            </Card.Text>
            <Button variant="dark">See More</Button>
          </Card.Body>
        </Col>
      </div>
    </Card>
  );
}

export default BasicExample;
