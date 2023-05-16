import React, { useState } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import "./appliedjob.css";
import SavedJobs from "./Saved-jobs-cards/cards";
import AlertJobs from "./Alert-jobs-cards/cards";

const Applied = () => {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Saved jobs (6)", value: "1" },
    { name: "Alert jobs (10+)", value: "2" },
    { name: "Applied Jobs (1)", value: "3" },
    // { name: "Money Bhai Hr Job", value: "4" },
  ];
  return (
    <div className="d-flex" style={{ backgroundColor: "#f3f3f3" }}>
      <div className="mainDiv mx-auto p-md-5 p-4 mt-md-4">
        <Row className="RowStylesSavedJobs">
          <Col xs={12}>
            <ButtonGroup className="custom-btns">
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
                  className="custom-btn"
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
        {radioValue === "1" ? (
          <div className="mt-5">
            <SavedJobs />
            <SavedJobs />
            <SavedJobs />
          </div>
        ) : radioValue === "2" ? (
          <div className="mt-5">
            <AlertJobs />
            <AlertJobs />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <h3>No jobs</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applied;
