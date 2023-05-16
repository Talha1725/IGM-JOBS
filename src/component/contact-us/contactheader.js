import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./contactus.css";

const Contactheader = () => {
  return (
    <div className="d-flex " style={{ backgroundColor: "#F3F3F3" }}>
      <div className="mx-auto MainContactRowss p-4 py-md-5">
        <div className="blackHeadings p-md-5 px-4 py-5">
          <span className="heading">Contact Us</span>
          <p className="subHeadings mt-md-5 mt-4">
            Contact us today, and let one of our team members show you why Dice
            is the trusted partner by companies that are transforming the world
            through technology.
          </p>
        </div>
        <div className="formDiv mt-3 p-md-5 px-4 py-5">
          <Form className="px-md-2">
            <Form.Group className="" controlId="formGroupEmail">
              <Row>
                <Col md={6} xs={12} className="py-md-4 py-3">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    className="form-control-custom  form-control"
                  />
                </Col>
                <Col md={6} xs={12} className="py-md-4 py-3">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    className="form-control-custom  form-control "
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12} className="py-md-4 py-3">
                  <Form.Control
                    type="text"
                    placeholder="Email Address"
                    className="form-control-custom  form-control"
                  />
                </Col>
                <Col md={6} xs={12} className="py-md-4 py-3">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    className="form-control-custom  form-control "
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12} className="py-md-4 py-3">
                  <Form.Control as="textarea" rows={6} placeholder="Message" />
                </Col>
                <Col
                  md={6}
                  xs={12}
                  className="py-md-4 py-3 d-flex flex-column align-items-center"
                >
                  <div className="py-3 btns">
                    <Button variant="outline-dark">
                      Continue
                    </Button>
                  </div>
                  <div className="py-md-3 btns">
                    <Button variant="dark">Schedule a meeting</Button>
                  </div>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contactheader;
