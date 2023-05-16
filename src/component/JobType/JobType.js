import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Bar from "../StepProgressBar/bar";
import { Link } from "react-router-dom";

import "./styles.css";

function JobType() {
  const rowStyle = {
    boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px",
  };

  const cardStyle = {
    boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  };

  return (
    <div className="mainDivv mx-auto px-md-0 px-2">
      <br />
      <div className="px-4">
        <Row className="p-3 ROwwwstyle text-center">
          <Col>
            <Bar activeVal={1} />
          </Col>
        </Row>

        <Row className="p-3 mt-3 ROwwwstyle lastDiv mb-5">
          <Col>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div class="textSystem text-center">
                <h4 class="py-2">
                  <strong>Select and Type</strong>
                </h4>
                <p class="d-none d-sm-block py-1 mb-5">
                  People call us when they have obviously complex cases, as well
                  as when insurance companies fail to treat them with dignity
                  and respect by making settlement proposals
                </p>
              </div>
            </div>

            <div>
              <Row className="justify-content-center px-md-0 px-4">
                <Col
                  className="text-center p-2 mx-sm-2 mt-md-0 cursor-pointer"
                  style={cardStyle}
                  xs={12}
                  md={3}
                >
                  <h4>Classic</h4>
                  <h3>$305+Gst</h3>
                  <div className="py-1">
                    <h6>Find Great Candidates</h6>
                    <h6>with our Basic ad</h6>
                  </div>
                  <p
                    style={{ fontSize: "0.85rem" }}
                    // className="px-1 px-sm-5 text-start"
                  >
                    People call us when they have obviously complex cases, as
                    well as when insurance companies fail to treat them with
                    dignity and respect by making settlement proposals
                  </p>
                  <Row className="text-center py-3">
                    <Col>
                      <Button variant="dark" className="">
                        Choose Plan
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col
                  className="text-center p-2 mx-sm-2 mt-md-0 mt-5 cursor-pointer"
                  style={{
                    ...cardStyle,
                    backgroundColor: "#322F2F",
                    color: "#fff",
                  }}
                  xs={12}
                  md={3}
                >
                  <h4>Classic</h4>
                  <h3>$305+Gst</h3>
                  <div className="py-1">
                    <h6>Find Great Candidates</h6>
                    <h6>with our Basic ad</h6>
                  </div>
                  <p
                    style={{ fontSize: "0.85rem" }}
                    // className="px-1 px-sm-5 text-start"
                  >
                    People call us when they have obviously complex cases, as
                    well as when insurance companies fail to treat them with
                    dignity and respect by making settlement proposals
                  </p>
                  <Row className="text-center py-3">
                    <Col>
                      <Button variant="light" className="px-4">
                        Choose Plan
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col
                  className="text-center p-2 mx-sm-2 mt-md-0 mt-5 cursor-pointer"
                  style={cardStyle}
                  xs={12}
                  md={3}
                >
                  <h4>Classic</h4>
                  <h3>$305+Gst</h3>
                  <div className="py-2">
                    <h6>Find Great Candidates</h6>
                    <h6>with our Basic ad</h6>
                  </div>
                  <p
                    style={{ fontSize: "0.85rem" }}
                    // className="px-1 px-sm-5 text-start"
                  >
                    People call us when they have obviously complex cases, as
                    well as when insurance companies fail to treat them with
                    dignity and respect by making settlement proposals
                  </p>
                  <Row className="text-center py-3">
                    <Col>
                      <Button variant="dark" className="px-4">
                        Choose Plan
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <br />
            <Row className="text-center py-3">
              <Link to='/ApplyDetails'>
                <Col>
                  <Button variant="dark">Continue</Button>
                </Col>
              </Link>
            </Row>
            <Row className="text-center py-1">
              <Col>
                <Button variant="outline-dark">Save Draft</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default JobType;
