import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { GrAttachment } from "react-icons/gr";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "./style.css";

const StyledButton = styled(MuiButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  color: theme.palette.grey[500],
  "&:hover": {
    backgroundColor: theme.palette.grey[500],
    color: "#fff",
    border: `1px solid ${theme.palette.grey[500]}`, // Change border color on hover to grey
  },
}));

function JobDetails() {
  return (
    <Container className="px-md-5 px-4 py-3 mainInput mt-md-0 mt-4">
      <Row>
        <Col xs={6} md={6}>
          <strong>Location</strong>
        </Col>
        <Col xs={6} md={6} className="d-flex justify-content-bewteen">
          <strong>Currency</strong>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={6}>
          London
        </Col>
        <Col xs={6} md={6} className="d-flex justify-content-bewteen">
          USD
        </Col>
      </Row>

      <div style={{ marginTop: "40px" }}>
        <Row>
          <strong>Skills</strong>
        </Row>
      </div>
      <div className="d-flex justify-content-between">
        <Row>
          <h5>
            <Badge bg="secondary">New</Badge>
          </h5>
        </Row>
        <Row>
          <h5>
            <Badge bg="secondary">New</Badge>
          </h5>
        </Row>
        <Row>
          <h5>
            <Badge bg="secondary">New</Badge>
          </h5>
        </Row>
        <Row>
          <h5>
            <Badge bg="secondary">New</Badge>
          </h5>
        </Row>
      </div>
      <hr />
      <Row>
        <strong>Attachments</strong>
      </Row>

      <StyledButton
        variant="outlined"
        component="label"
        style={{ borderRadius: "12px" }}
        className="text-center"
      >
        Upload File <GrAttachment size={15} style={{ marginLeft: "5px" }} />
        <input hidden accept="image/*" multiple type="file" />
      </StyledButton>
      <hr />
      <Row>
        <strong>Cover Letter</strong>
      </Row>
      <Form.Control
        as="textarea"
        rows={7}
        onDragStart={(e) => {
          e.preventDefault();
        }}
      />

      <br />
      <div className="mx-auto text-center btnshoop">
        <Button variant="dark" style={{ borderRadius: "12px" }}>
          Message
        </Button>
      </div>
      <br />
      <div className="mx-auto text-center btnshoop">
        <Button variant="dark" style={{ borderRadius: "12px" }}>
          Submitted
        </Button>
      </div>
      <br />
    </Container>
  );
}

export default JobDetails;
