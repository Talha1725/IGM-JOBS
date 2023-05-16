import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./style.css";

export default function SignIn() {
  return (
    <div
      className="d-flex px-4 contentShooooop"
      style={{ backgroundColor: "#F3F3F3" }}
    >
      <div className="mx-auto mainSigninRows p-4 py-md-5 mb-3 mt-3 ">
        <h3 className="text-center">Sign in</h3>
        <div className="px-md-5 px-3 mx-auto">
          <Row className="py-3  justify-content-center ">
            <Form.Control
              type="email"
              className=" "
              placeholder="Email Address"
            />
          </Row>
          <Row className=" py-2 justify-content-center">
            <Form.Control
              type="password"
              className=" "
              placeholder="Password"
            />
            <strong className="py-2">Forgot Password?</strong>
          </Row>
          <Row>
            <Button variant="dark">Login</Button>
          </Row>
          <Row>
            <div class="line-container">
              <div class="line"></div>
              <div class="line-text">or</div>
              <div class="line"></div>
            </div>
          </Row>
          <Row>
            <Button variant="outline-dark">Sign in with Google</Button>
          </Row>
          <br />
          <Row>
            <Button variant="outline-dark">Join Now</Button>
          </Row>
        </div>
      </div>
    </div>
  );
}
