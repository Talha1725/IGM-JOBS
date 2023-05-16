import React from "react";
import "./style.css";
import { Form, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="backgroundFooter mx-auto mb-md-1">
      <Row className="mainRowFooter">
        <Col md={4} xs={6}>
          <ul className="ul-text text-left">
            <li className=" headingsss">Services</li>
            <li>Development</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>Wordpress</li>
          </ul>
        </Col>
        <Col md={4} xs={5}>
          <ul className="ul-text text-left">
            <li className=" headingsss py-md-2">Company</li>
            <li className="footersomething py-md-0 py-3">
              Eget nulla facilisi etiam dignissim diam quis enim lobortis
              scelerisque. Eu feugiat pretium nibh ipsum
            </li>
          </ul>{" "}
        </Col>
        <Col md={4} xs={6}>
          <ul className="ul-text">
            <li className=" headingsss">Contact Us</li>

            <li>000 - 609 -456</li>
            <li>contact@lop.com</li>
            <li>Eu augue ut lectus arcu bibendum at.</li>
          </ul>{" "}
        </Col>
        <Col md={4} xs={5} className="d-md-none d-block">
          <Row
            className="justify-content-center"
            style={{ overflow: "hidden" }}
          >
            <Col xs={4}>
              <Row className="justify-content-center">
                <Col className="d-flex justify-content-center align-items-center py-4">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <Row className="justify-content-center ">
                <Col className="d-flex justify-content-center align-items-center py-4">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr
        style={{
          backgroundColor: "white",
          height: "1px",
          marginTop: "10px",
          marginBottom: "10px",
          border: "none",
        }}
        className="d-none d-sm-flex"
      />

      <Row className="justify-content-center customRowFooter py-md-5 d-none d-sm-flex">
        <Col className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Col>
      </Row>
    </div>
  );
}
