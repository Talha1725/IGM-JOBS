import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import placeholder from "./placeholder.png";
import placeholder1 from "./placholder1.png";
import MuiCard from "./careerCards/card";
import BCard2 from "./careerCards2/card";
import BCard3 from "./careerCards3/card";
import Carousel from "./slider/slider";
import "./Career.css";

function Career() {
  const cardData = [
    { id: 1, title: "Card 1", content: "Content for Card 1" },
    { id: 2, title: "Card 2", content: "Content for Card 2" },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
  ];
  return (
    <div
      style={{ backgroundColor: "#F5F5F5" }}
      className="d-flex justify-content-center "
    >
      <div className="p-3 custom-containerr">
        <Row className="d-flex justify-content-center ">
          {/* 1st Row start*/}

          <div
            className="d-flex align-items-center justify-content-center custom-Row-1 flex-column"
            // style={{ height: "100vh" }}
          >
            <Row className="custom-InenrRow-1">
              <Col className="custom-cols custom-col1" md={6}>
                <Card style={{ border: "none", height: "100%" }}>
                  <Card.Body>
                    <h1>Career Advice</h1>
                    <span className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </span>
                    <br />
                    <Button className="button mt-3" variant="dark">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                className="custom-cols custom-col2 d-flex align-items-center"
                md={6}
              >
                <Card className="customImageStyleCard d-flex align-items-center">
                  <Card.Img className="image" src={placeholder} />
                </Card>
              </Col>
            </Row>
          </div>

          {/* 1st Row end*/}

          {/* 2nd Row start*/}

          <div className="px-5 mt-5">
            <div>
              <p className="heading">FEATURED ARTICLES</p>
            </div>
            <Row className="justify-content-center mb-3">
              {cardData.map((card) => (
                <Col
                  xs={12}
                  md={4}
                  style={{ marginBottom: "10px" }}
                  key={card.id}
                >
                  <MuiCard />
                </Col>
              ))}
            </Row>
          </div>

          {/* 2nd Row end*/}

          {/* 3rd Row start*/}

          <div className="px-5 mt-5 d-none d-sm-block">
            <p className="heading">SPONSORED</p>
            <Row className="justify-content-center mb-3">
              <Col>
                <BCard2 />
              </Col>
            </Row>
          </div>

          {/* 3rd Row end*/}
          {/* 4th Row start*/}

          <div className="px-5  d-none d-sm-block">
            <Row className="justify-content-center mb-3">
              <Col>
                <BCard3 />
              </Col>
            </Row>
          </div>

          {/* 4th Row end*/}
          {/* 5th Row start*/}

          <div className="px-5  d-none d-sm-block">
            <Row className="justify-content-center mb-3">
              <Col>
                <BCard2 />
              </Col>
            </Row>
          </div>

          {/* 5th Row end*/}

          {/* Mobile only Row start*/}

          <div className="px-4 d-sm-none ">
            <p className="heading">SPONSORED</p>
            <Row className="justify-content-center mb-3">
              <Card
                style={{
                  boxShadow: "0px 1px 14px rgba(0, 0, 0, 0.25)",
                  borderRadius: "7px",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                // className="mobileonlyRow"
              >
                <div style={{ width: "45%" }}>
                  <Card.Img
                    variant="top"
                    style={{
                      width: "162px",
                      height: "132px",
                      marginLeft: "-20px",
                    }}
                    src={placeholder1}
                  />
                </div>
                <Card.Body style={{ width: "55%" }}>
                  <span className="mobileonlyHeading">
                    What Toxic Positivity Looks Like at Work—and How to Deal
                    With It
                  </span>
                </Card.Body>
              </Card>
            </Row>
          </div>

          {/* Mobile only Row  end*/}

          {/* 6th Row start*/}

          <div className="px-5 mt-5  d-none d-sm-block">
            <div>
              <p className="heading">LATEST JOBS</p>
            </div>
            <Row className="justify-content-center mb-3">
              {cardData.map((card) => (
                <Col
                  xs={12}
                  md={4}
                  style={{ marginBottom: "10px" }}
                  key={card.id}
                >
                  <MuiCard />
                </Col>
              ))}
            </Row>
          </div>

          {/* 6th Row end*/}

          {/* Mobile only Row Start*/}

          <div className="px-5 mt-5 d-sm-none">
            <div>
              <p className="heading">LATEST JOBS</p>
            </div>
            <Row className="justify-content-center mb-3">
              <Col xs={12} md={4}>
                <Carousel />
              </Col>
            </Row>
          </div>
          {/* Mobile Only Row end*/}
        </Row>
      </div>
    </div>
  );
}

export default Career;
