import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Cards from "./Cards/cards";
import Card from "./LastCard/cards";
import "./style.css";
import img1 from "./Cards/images/image 42.png";
import img2 from "./Cards/images/image 43.png";
import img3 from "./Cards/images/image 44.png";
import img4 from "./Cards/images/image 45.png";
import img5 from "./Cards/images/image 46.png";
import { Link } from "react-router-dom";
export default function postJob() {
  const cardsHeading = [
    "POST OPEN JOBS",
    "MANAGE YOUR JOBS",
    "TRACK APPLICANTS",
    "PREPARE TO HIRE",
  ];
  const cardsPara =
    "Instantly reach an audience of unique, engaged and skilled candidates  actively searching for their next dream job.";
  return (
    <div className="d-flex" style={{ backgroundColor: "#F3F3F3" }}>
      <div className="mx-auto MainPostJobRow p-md-4 p-3 mb-5 ">
        {/* First Row */}
        <div className="blackHeadings p-md-5 px-4 py-5">
          <span className="heading">Post Your Job</span>
          <p className="subHeading mt-md-4 mt-4">
            Contact us today, and let one of our team members show you why Dice
            is the trusted partner by companies that are transforming the world
            through technology.
          </p>
          <Link to="/post">
            <Button variant="light" className="mt-4 btns">
              Get Started
            </Button>
          </Link>
        </div>
        {/* First Row */}

        {/* Second Row */}
        <div className="text-center mt-md-5 py-md-5 mt-4">
          <h4>With IGM, You are in control</h4>
          <div className="postjobPara">
            <p>
              People call us when they have obviously complex cases, as well as
              when
            </p>
          </div>
        </div>

        {/* Second Row */}

        {/* Card Row */}

        <Row className="px-2 py-3">
          <Col xs={12} md={3} className="py-md-0 py-4">
            <Cards
              image={img1}
              cardsPara={cardsPara}
              cardsHeading={cardsHeading[0]}
            />
          </Col>
          <Col xs={12} md={3} className="py-md-0 py-4">
            <Cards
              image={img2}
              cardsPara={cardsPara}
              cardsHeading={cardsHeading[1]}
            />
          </Col>
          <Col xs={12} md={3} className="py-md-0 py-4">
            <Cards
              image={img3}
              cardsPara={cardsPara}
              cardsHeading={cardsHeading[2]}
            />
          </Col>
          <Col xs={12} md={3} className="py-md-0 py-4">
            <Cards
              image={img4}
              cardsPara={cardsPara}
              cardsHeading={cardsHeading[3]}
            />
          </Col>
        </Row>
        {/* Card Row */}

        {/* Second Black Row */}
        <div className="blackHeadings p-md-5 px-4 py-md-5 mt-md-3 py-5">
          <div className="row align-items-center">
            <div className="col-md-6 py-md-5 mb-md-0 mb-3">
              <span
                className="heading"
                style={{ textDecoration: "none", lineHeight: "2.3rem" }}
              >
                READY TO GET
                <br />
                STARTED?
              </span>
              <p className="subHeading mt-md-4 mt-4">
                Whether you are posting one job at a time or need a more
                automated approach for multiple jobs, we have the right package
                for you
              </p>
            </div>
            <div className="col-md-6 ">
              <img
                className="py-md-3 imgsty"
                src={img5}
                alt="Description of the image"
              />
            </div>
          </div>
        </div>

        {/* Second Black Row */}

        {/* Second Card Row */}

        <Row className="px-2 py-3 mt-md-5 mb-md-5">
          <Col xs={12} md={4} className="py-md-0 py-4">
            <Card />
          </Col>
          <Col xs={12} md={4} className="py-md-0 py-4">
            <Card />
          </Col>
          <Col xs={12} md={4} className="py-md-0 py-4">
            <Card />
          </Col>
        </Row>
        {/* Second Card Row */}
      </div>
    </div>
  );
}
