import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Bar from "../StepProgressBar/bar";
import { Link } from "react-router-dom";

import "./style.css";
export default function ApplyDetails() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          style={{ width: "60rem", backgroundColor: "white" }}
          className="px-3 py-4"
        >
          <div className="py-3 RowStyle">
            <Bar activeVal={2} />
          </div>
          <div className="RowStyle">
            <span className="firstHeading">Write About Your Job</span>
            <h5 className="mt-3">Showcase your brand</h5>
            <p className="para">
              People call us when they have obviously complex cases, as well as
              when insurance companies fail to treat them with dignity and
              respect by making settlement proposals
            </p>
            <div className="center">
              <div className="cardstyle text-center d-flex flex-column mt-4">
                <div className="py-3">
                  <Button className="btns" variant="dark">
                    Existing Brand
                  </Button>
                </div>
                <div className="py-3">
                  <Button variant="outline-dark">Create Brand</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="RowStyle">
            <Row className="d-flex flex-column flex-md-row">
              <Col>
                <span className="firstHeading">Jobs Description</span>
              </Col>
              <Col className="d-flex justify-content-md-end ">
                <Button
                  className="buttonsgroup"
                  variant="dark"
                  style={{ marginRight: "1.2rem" }}
                >
                  Help me write my ad
                </Button>
                <Button variant="outline-dark" className="buttonsgroup">
                  {" "}
                  Write my Own
                </Button>
              </Col>
            </Row>
            {/* Fields Form start*/}
            <div className="mt-5">
              <Row className="justify-content-md-center">
                <Col md="6" className="mb-3">
                  <div className="p-3 ">
                    <h4>Takes & Responsibilities</h4>
                    <div className="applycustomRow  p-2">
                      <span className="px-3">
                        + Add Task & Responsibilities
                      </span>
                    </div>
                  </div>
                </Col>
                <Col md="6" className="mb-3">
                  <div className="p-3 ">
                    <h4>Benifits (optional)</h4>
                    <div className="applycustomRow  p-2">
                      <span className="px-3">+ Add benefit</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="6" className="mb-3">
                  <div className="p-3 ">
                    <h4>Qualification & Experience</h4>
                    <div className="applycustomRow  p-2">
                      <span className="px-3">+ Qualification & Experience</span>
                    </div>
                  </div>
                </Col>
                <Col md="6" className="mb-3">
                  <div className="p-3 ">
                    <h4>Videos (Optional)</h4>
                    <div className="applycustomRow  p-2 ">
                      <span className="px-3">+ Video</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Fields Form end*/}
          </div>
          <div className="RowStyle">
            <span className="firstHeading">About the Business</span>
            <Form className="py-md-3 py-3 ">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={6} />
              </Form.Group>
            </Form>
          </div>
          <div className="RowStyle">
            <span className="firstHeading">Job Summary</span>
            <Form className="py-md-3 py-3 ">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={6} />
              </Form.Group>
            </Form>
          </div>
          <div className="RowStyle">
            <span className="firstHeading">Key Selling Points</span>
            <Form className="py-md-3 py-3">
              <Row>
                <Col md={7} sm={12}>
                  <Form.Group
                    controlId="exampleForm.ControlInput1"
                    className="mb-3"
                  >
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    controlId="exampleForm.ControlInput2"
                    className="mb-3"
                  >
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    controlId="exampleForm.ControlInput3"
                    className="mb-3"
                  >
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={5} sm={12}>
                  <div className="d-flex flex-column justify-content-between align-items-md-start mt-md-5 align-items-center ">
                    <Button variant="outline-dark" className="mb-2 p-2 p-md-2">
                      Continue
                    </Button>
                    <Link to='/Preview'>
                      <Button variant="dark" className="px-3 py-2">
                        Preview
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
