import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { FaMobile } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";

import "./style.css";

export default function Preview() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
  ];
  return (
    <div
      className="d-flex justify-content-center "
      style={{ backgroundColor: "#F3F3F3" }}
    >
      <div style={{ width: "60rem" }} className="px-3 py-4 mb-md-5 mt-md-5 previewContainer ">
        <div>
          <div className="text-md-center">
            <h4>Preview</h4>
          </div>
          <div className="text-md-center">
            <p className="para-preview">
              People call us when they have obviously complex cases, as well as
              when insurance companies fail to treat them with dignity and
              respect by making settlement proposals
            </p>
          </div>
        </div>
        <div className="buttonGroups mt-md-5 mt-3">
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-dark" : "outline-dark"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.value === "1" ? <SlScreenDesktop /> : <FaMobile />}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        {/* <div className=""> */}
        <div className="customBox px-md-2 py-1 d-flex flex-column flex-md-row mt-5">
          <Col className="mb-3 mb-md-0">
            <div className="p-md-5 py-2 px-2">
              <h4>Software Engineer</h4>
              <p>RiceTech LLC</p>
              <p>North Sydney NSW 2060</p>
              <p>Information & Communication Technology</p>
              <p>Full Time</p>
              <p>[Pay won’t be displayed on your ad]</p>
            </div>
          </Col>
          <Col className="customPreviewBox">
            <div className="p-md-5 p-3">
              <h5>Task Responsibilities</h5>
              <ul>
                <li>Something</li>
              </ul>
              <h5>Qualification & Experience</h5>
              <ul>
                <li>Something</li>
              </ul>
              <h5>Benifits</h5>
              <ul>
                <li>100% Something</li>
              </ul>
            </div>
          </Col>
        </div>
        <Row className="mt-md-5 px-2 px-md-0">
          <div className="d-flex flex-column py-5 buttonsShoop">
            <Button variant="dark" className="mb-2">
              Quick Apply
            </Button>
            <Button variant="outline-dark">Save</Button>
          </div>
        </Row>
      </div>
    </div>
    // </div>
  );
}
