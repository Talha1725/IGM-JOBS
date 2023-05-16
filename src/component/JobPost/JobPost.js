import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Bar from "../StepProgressBar/bar";
import Form from "react-bootstrap/Form";
import "./styles.css";
import { Link } from "react-router-dom";

function JobPost() {
  const checkboxArr = ["Freelance / Contract", "Full Time", "Part Time"];

  return (
    <div className="mainDivv mx-auto">
      <br />
      <div className="px-md-4 MainSecondDiv">
        <Row className="px-3 py-3 RowWStyle">
          <Col>
            <Bar activeVal={0} />
          </Col>
        </Row>
        <Row className="p-3 mt-3 RowWStyle">
          <Col>
            <h4>Classify Your role</h4>
            <h6>Role Information</h6>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <div className="row">
                  <div className="col-md-6 py-2">
                    <Form.Control
                      type="text"
                      placeholder="Job Title"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 py-2">
                    <Form.Control
                      type="text"
                      placeholder="Location"
                      className="form-control "
                    />
                  </div>
                </div>
              </Form.Group>
            </Form>
            <h4>Category</h4>
            <h6>Suggested category based on your Job Title</h6>
            <Form className="py-4">
              {checkboxArr.map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id={`default-${type}`}
                    label={type}
                    className="custom-checkbox"
                  />
                </div>
              ))}
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mr-md-2 p-3 mt-3 RowWStyle">
            <h5>
              {" "}
              <strong>Work Type</strong>
            </h5>
            <Form className="py-4">
              {checkboxArr.map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id={`default-${type}`}
                    label={type}
                    className="custom-checkbox"
                  />
                </div>
              ))}
            </Form>
          </Col>
          <Col xs={12} className="ml-md-2 p-3 mt-3 RowWStyleproMAx">
            <h5>
              <strong>Pay Details</strong>
            </h5>
            <Form className="py-4">
              {checkboxArr.map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id={`default-${type}`}
                    label={type}
                    className="custom-checkbox"
                  />
                </div>
              ))}
            </Form>
          </Col>
        </Row>

        <Row className="p-3 mt-3 RowWStyle lastDiv">
          <Col>
            <h4>Pay range</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <div className="row">
                  <div className="col-md-6 py-2">
                    <Form.Label>
                      <h6>From</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      style={{ height: "60px" }}
                    />
                  </div>
                  <div className="col-md-6 py-2">
                    <Form.Label>
                      <h6>To</h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control "
                      style={{ height: "60px" }}
                    />
                  </div>
                </div>
              </Form.Group>
            </Form>
            <Row className="text-center py-3">
              <Col className="btnsShoop">
                <Link to="/jobtype">
                  <Button variant="dark">Continue</Button>
                </Link>
              </Col>
            </Row>
            <Row className="text-center py-3">
              <Col className="btnsShoop">
                <Button variant="outline-dark">Save Draft</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default JobPost;
