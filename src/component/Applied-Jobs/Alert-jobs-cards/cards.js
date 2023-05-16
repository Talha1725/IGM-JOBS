import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import "./style.css";
import Switch from "./switch";
export default function cards() {
  return (
    <div>
      <Row className="mt-3  customCardsJobsaved px-2 py-3">
        <Col md={6} xs={12} className="p-md-3 text-left">
          <Row>
            <Col xs={8}>
              <h5>Intellisearch Alert</h5>
            </Col>
            <Col xs={4} className="d-flex justify-content-end">
              <div className="d-sm-none">
                <Switch />
              </div>
            </Col>
          </Row>
          <span className="text-muted">Taproot Foundation, London, US</span>
          <br />
          <div className="d-none d-md-block">
            <Switch />
          </div>
        </Col>
        <Col md={6} xs={12} className="p-md-3">
          <div className="d-flex flex-column align-items-md-end mt-md-0 mt-3">
            <h6>27/07/2022</h6>
            <Form>
              <Form.Check
                type="radio"
                label="Daily"
                aria-label="radio 1"
                className="radio-label"
              />
              <Form.Check
                type="radio"
                label="Weekly"
                aria-label="radio 1"
                className="radio-label"
              />
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
