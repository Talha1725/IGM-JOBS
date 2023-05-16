import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footermain">
      <Row className="text-center d-flex justify-content-center footerSecondary py-5">
        <Col md={3}>
          <ul className="ul-text text-left">
            <li className="headings">Services</li>
            <li>Development</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>Wordpress</li>
          </ul>
        </Col>
        <Col md={3}>
          <ul className="ul-text text-left">
            <li className="headings">Company</li>
            <li>
              Eget nulla facilisi etiam dignissim diam quis enim lobortis
              scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel
              pretium.{" "}
            </li>
          </ul>
        </Col>
        <Col md={2}>
          <ul className="ul-text">
            <li className="headings">Contact Us</li>

            <li>000 - 609 -456</li>
            <li>contact@lop.com</li>
            <li>Eu augue ut lectus arcu bibendum at.</li>
          </ul>
        </Col>
      </Row>
      <br />
      <br />
      <hr className="footerHr" />
      <Row className="text-center d-flex justify-content-center mb-5">
        <Col md={1}>
          <AiFillTwitterCircle size={32} color="#fff" />
        </Col>
        <Col md={1}>
          <FaFacebook size={32} color="#fff" />
        </Col>
        <Col md={1}>
          <TiSocialLinkedinCircular size={44} color="#fff" />
        </Col>
        <Col md={1}>
          <IoLogoInstagram size={36} color="#fff" />
        </Col>
      </Row>
    </div>
  );
}
