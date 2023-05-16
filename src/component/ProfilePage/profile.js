import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Avatar } from "@mui/material";
import Slider from "@mui/material/Slider";

import Badge from "react-bootstrap/Badge";

import { AiOutlinePlus } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";

import "./profile.css";
import Footer from "../Footer/footer";
function BlogPage() {
  const badgeStyle = { borderRadius: "11px" };

  const border = {
    boxShadow: "0px 4px 5px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
  };
  const Heading = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "21px",
    lineHeight: "25px ",
  };
  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <Container
          // maxWidth="1200px"
          style={{ backgroundColor: "#F5F5F5", fontSize: "0.89rem" }}
        >
          <Row className="justify-content-center py-2">
            <Col
              md={3}
              xs={12}
              style={{ margin: "0 10px" }}
              className="mb-md-5"
            >
              {/* ROw-1 Start*/}
              <div
                className="p-3 pt-md-0 pt-3  xs-12"
                style={{ ...border, borderRadius: "15px", padding: "0 -50px" }}
              >
                <div className="text-center py-3">
                  <Avatar
                    alt="Remy Sharp"
                    src={Image}
                    sx={{ width: 80, height: 80 }}
                    className="mx-auto"
                  />
                </div>
                <div className="text-center py-3">
                  <span style={Heading}>Muhammad Ali</span>
                  <h6>UI/UX Developer / Designer</h6>
                </div>
                <div className="text-center py-1">
                  <Button className="col-auto" variant="dark">
                    Edit Profile
                  </Button>
                </div>
              </div>
              {/* Row-1 End */}

              {/* Row-2 Start */}

              <div
                className="pt-md-0 mt-3 xs-12"
                style={{ ...border, borderRadius: "11px" }}
              >
                <div className="px-3 py-2">
                  <div class="d-flex justify-content-between ">
                    <span style={Heading}>Resume</span>
                    <h4 class="ms-auto">
                      <AiOutlinePlus size={24} />
                    </h4>
                  </div>
                  <span className="text-muted text-decoration-underline">
                    muhamamd.pdf
                  </span>
                </div>
              </div>

              <div
                className="pt-md-0 mt-3 xs-12"
                style={{ ...border, borderRadius: "11px" }}
              >
                <div className="px-3 py-2">
                  <div class="d-flex justify-content-between ">
                    <span style={Heading}>Cover Letter</span>
                    <h4 class="ms-auto">
                      <AiOutlinePlus size={24} className="mx-3" />
                      <TbEdit size={24} />
                    </h4>
                  </div>
                  <span className="text-muted text-decoration-underline">
                    muhamamd.pdf
                  </span>
                </div>
              </div>

              <div
                className="pt-md-0 mt-3 xs-12"
                style={{ ...border, borderRadius: "11px" }}
              >
                <div className="px-3 py-2">
                  <div class="d-flex justify-content-between align-items-center">
                    <span style={{ ...Heading, fontSize: "23px" }}>
                      About You
                    </span>
                    <h4 class="ms-auto">
                      <AiOutlinePlus size={24} className="mx-3" />
                      <TbEdit size={24} />
                    </h4>
                  </div>
                  <Row>
                    <span className="mb-2 mt-2" style={Heading}>
                      Experience
                    </span>
                    <span className="text-muted ">4 years</span>
                  </Row>

                  <hr />
                  <Row>
                    <span className="mb-2" style={Heading}>
                      Mobile no
                    </span>
                    <span className="text-muted ">0306 0450086</span>
                  </Row>

                  <hr />
                  <Row>
                    <span className="mb-2" style={Heading}>
                      Location
                    </span>
                    <span className="text-muted ">Lahore, Punjab</span>
                    <span className="text-muted">60000</span>
                  </Row>
                </div>
              </div>

              <div
                className="pt-md-0 mt-3 xs-12"
                style={{ ...border, borderRadius: "11px" }}
              >
                <div className="px-3 py-2">
                  <div class="d-flex justify-content-between align-items-center ">
                    <span style={Heading}>Work Experience</span>
                    <h4 class="ms-auto">
                      <AiOutlinePlus size={24} />
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="pt-md-0 mt-3 xs-12"
                style={{ ...border, borderRadius: "11px" }}
              >
                <div className="px-3 py-2">
                  <div class="d-flex justify-content-between align-items-center ">
                    <span style={Heading}>Education</span>
                    <h4 class="ms-auto">
                      <AiOutlinePlus size={24} />
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="pt-md-0 mt-3 xs-12"
                style={{ ...border, borderRadius: "11px" }}
              >
                <div className="px-3 py-2">
                  <div class="d-flex justify-content-between align-items-center ">
                    <span style={Heading}>Social Profiles</span>
                    <h4 class="ms-auto">
                      <AiOutlinePlus size={24} />
                    </h4>
                  </div>
                </div>
              </div>

              {/* Row-2 End */}
            </Col>

            <Col xs={12} md={5} className="customColProfile mb-md-0 mb-5">
              <div
                style={{ ...border, borderRadius: "28px" }}
                className=" mt-md-0 mt-4 p-4 align-self-start"
              >
                <div class="d-flex justify-content-between ">
                  <span style={Heading}>Ideal Job</span>
                  <h4 class="ms-auto">
                    <AiOutlinePlus size={24} className="mx-3" />
                    <TbEdit size={24} />
                  </h4>
                </div>

                <h6 className="py-1">Describe Job Title</h6>
                <div
                  className="p-2"
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    // width: "80%",
                  }}
                >
                  {[1, 2, 3].map((item, index) => (
                    <Badge
                      key={index}
                      style={{
                        ...badgeStyle,
                        fontSize: "0.7rem",
                        // fontStyle: "normal",
                      }}
                      className="me-3  p-2"
                      bg="dark"
                    >
                      Development
                    </Badge>
                  ))}
                </div>
                <h4 className="py-2">Employment Type</h4>
                <Row>
                  <span className="text-muted py-1">Full Time Contract</span>
                  <span className="text-muted py-1">
                    Independent Contract - W2
                  </span>
                  <span className="text-muted py-1">
                    Contract to Hire - Corp - to - Corp
                  </span>
                  <span className="text-muted py-1">
                    Contract to Hire - Independent
                  </span>
                </Row>
                <hr />
                <span style={Heading}>Willing to Relocate</span>
                <p>Yes</p>
                <span style={Heading}>Desired Locations</span>
                <p>Yes</p>
                <span style={Heading}>Travel </span>
                <p>Up to 100%</p>
              </div>

              <div
                style={{ ...border, borderRadius: "11px" }}
                className=" mt-md-3 mt-4 p-2 align-self-start"
              >
                <div class="d-flex justify-content-between  ">
                  <h4 class="ms-auto">
                    <AiOutlinePlus size={24} className="mx-3" />
                    <TbEdit size={24} />
                  </h4>
                </div>
                <div className="px-3">
                  <div class="d-flex justify-content-between  ">
                    <span style={Heading}>Skills</span>
                    <span style={Heading}>Experience</span>
                  </div>
                  <div class="d-flex justify-content-between  sliderCustom">
                    <div style={{ width: "60%" }}>
                      <span className="text-muted mt-5">Html</span>
                      <Slider
                        size="large"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                      />
                    </div>
                    <div>
                      <span className="text-muted">4 Years</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between  sliderCustom">
                    <div style={{ width: "60%" }}>
                      <span className="text-muted mt-5">CSS</span>
                      <Slider
                        size="large"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                      />
                    </div>
                    <div>
                      <span className="text-muted">4 Years</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between  sliderCustom">
                    <div style={{ width: "60%" }}>
                      <span className="text-muted mt-5">Javascript</span>
                      <Slider
                        size="large"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                      />
                    </div>
                    <div>
                      <span className="text-muted">4 Years</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between  sliderCustom">
                    <div style={{ width: "60%" }}>
                      <span className="text-muted mt-5">Recursion</span>
                      <Slider
                        size="large"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                      />
                    </div>
                    <div>
                      <span className="text-muted">4 Years</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between  sliderCustom">
                    <div style={{ width: "60%" }}>
                      <span className="text-muted mt-5">Java Akka</span>
                      <Slider
                        size="large"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                      />
                    </div>
                    <div>
                      <span className="text-muted">4 Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BlogPage;
