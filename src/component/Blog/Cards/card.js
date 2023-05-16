import { Card, Button } from "react-bootstrap";
import placeholder from "./placeholder1.png";

import "./Card.css";

function BasicExample() {
  return (
    <Card className="card-container">
      <Card.Img
        variant="top"
        src={placeholder}
        className="imageStyle px-md-0 py-md-0 px-3 py-2"
      />
      <Card.Body className="card-body1">
        <Card.Title>
          What Toxic Positivity Looks Like at Work—and How to Deal With It
        </Card.Title>
        <p class="text-muted">25 January, 2020</p>
        <Card.Text className="my-card-text">
          Lorem Ipsum is simply dummy text of the printing nd typesett
          ingindustry. Lorem Ipsum has been industry's standard dummy text ever
          since 1500s. Lorem Ipsum is simply dummy text of the printing nd
          typesett ingindustry.
        </Card.Text>
        <Button variant="link" style={{ color: "red" }}>
          View artical +
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
