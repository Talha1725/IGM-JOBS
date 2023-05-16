import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log("clicked");
    navigate('/CandidatesList')
  };
  return (
    <div>
      <Row
        className="mt-3  customCardsJobsaved px-2 py-3 cursor-pointer"
        onClick={handleClick}
      >
        <Col md={6} xs={12} className="p-md-3 text-left">
          <h5>Looking for a Senior Php Developer</h5>
          <span className="text-muted">Taproot Foundation, London, US</span>
          <br />
          <span>Posted 6 days ago - 68 applicants</span>
        </Col>
        <Col
          md={6}
          xs={12}
          className="p-md-3 d-flex flex-column align-items-end"
        >
          <div className="py-1">
            <Button variant="outline-dark">Applied</Button>
          </div>
          <div className="py-1">
            <Button variant="dark">Remove</Button>
          </div>{" "}
        </Col>
      </Row>
    </div>
  );
}
