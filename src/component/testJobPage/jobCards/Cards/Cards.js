import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { FaGoogleWallet } from "react-icons/fa";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

function TextExample() {
  const navigate = useNavigate();
  return (
    <Card className="cardStyle" onClick={() => navigate("/details")}>
      <Card.Body>
        <Row className="title">
          <Col className="d-flex justify-content-start ">
            <span>Php Developer</span>
          </Col>
          <Col className="d-flex justify-content-end">
            <span>AUD 44000 P.A</span>
          </Col>
        </Row>
        <span className="mb-0 mb-sm-1 text-muted subtitle">
          Posted 6 days ago - 68 applicants
        </span>
        <Row className="py-2">
          <Col className="d-flex justify-content-start">
            <span className="details">
              Lorem Ipsum is simply dummy text of the printing nd typesetting
              industry. Lorem Ipsum has been e industry's standard dummy text
              ever since he 1500s.
            </span>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="d-flex flex-column ">
              <Button variant="outline-secondary">
                Save <BsBookmark size={16} />
              </Button>
              <Button variant="dark" className="my-3">
                Apply <RiCheckboxCircleLine size={19} />
              </Button>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-start px-0 cardfooter">
          <span className=" col text-muted">
            <FiShoppingBag size={16} /> Full Time{" "}
          </span>
          <span className=" col text-muted">Senior Developer</span>
          <span className=" col text-muted">
            <FaGoogleWallet size={16} />
            Payment Varified
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
