import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./candidate.css";
import { CiLocationOn } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import Avatar from "@mui/material/Avatar";

const candidatelist = () => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <div
      className="d-flex"
      style={{ backgroundColor: "#f3f3f3", height: "100vh" }}
    >
      <div className="mainDivs mx-auto px-md-5 px-4 py-3 mb-md-5 mt-md-3">
        <p className="HeadingCandidateList mb-md-0 mb-4">Candidates List</p>
        <div className="candidateCards mt-md-3 p-3">
          <Row>
            <Col md={3}>
              {" "}
              <div className="FirstColumn">
                <Avatar
                  {...stringAvatar("Talha Noor")}
                  sx={{ width: 100, height: 100 }}
                />
                <div className="text">
                  <h6 className="Name">Talha Noor</h6>
                  <h6 className="Job">Designer</h6>
                </div>
              </div>
            </Col>

            <Col md={9} className="px-3">
              <Row className="justify-content-end py-md-0 py-3 px-md-0 px-3">
                <Col md={1} xs={6} className="py-md-0 py-3">
                  <p className="mb-md-3">
                    <CiLocationOn className="Location-h" size={16} />
                  </p>
                  <p className="Location">USA</p>
                </Col>
                <Col
                  md={2}
                  xs={6}
                  className="text-md-center text-end py-md-0 py-3"
                >
                  <p className="mb-md-3 Education-h">Education</p>
                  <p className="Education">Bachelor's</p>
                </Col>
                <Col md={2} xs={6} className="py-md-0 py-1">
                  <p className="mb-md-3 Visa-h">Visa Status</p>
                  <p className="Visa">American</p>
                </Col>
                <Col md={2} xs={6} className="text-md-center text-end">
                  <p className="mb-md-3">
                    <BiDollar className="Amount-h" size={16} />
                  </p>
                  <p className="Amount">2000$</p>
                </Col>
              </Row>

              <Row className="justify-content-end">
                <Col md={2} className="text-center">
                  <div className="text">
                    <Button className="Button" variant="dark" size="sm">
                      View More
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default candidatelist;
