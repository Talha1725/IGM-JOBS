import React, { useState } from "react";
import Img1 from "./Images/Bechtel.png";
import Img2 from "./Images/Bethanie.png";
import Img3 from "./Images/Oakdare.png";
import Img4 from "./Images/Objective.png";
import Img5 from "./Images/Orica.png";
import Img6 from "./Images/Fram.png";
import Img7 from "./Images/Frame.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {
  IoChevronForwardCircleSharp,
  IoChevronBackCircleSharp,
} from "react-icons/io5";

import { Row, Col, Form, Button } from "react-bootstrap";
import "./style.css";
import MainImage from "./Images/Background.png";

import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const logos = [
    { src: Img1, alt: "Oakdare" },
    { src: Img5, alt: "Orica" },
    { src: Img4, alt: "Objective" },
    { src: Img2, alt: "Bethanie" },
    { src: Img3, alt: "Bechtel" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const [activeColIndex, setActiveColIndex] = useState(null);

  const handleColClick = (index) => {
    setActiveColIndex(index);
  };

  const colClasses = (index) => {
    if (index === activeColIndex) {
      // console.log("activeColIndex", activeColIndex);
      if (activeColIndex === 0) {
        navigate("/jobs");
      } else if (activeColIndex === 1) {
        navigate("/profile");
      } else if (activeColIndex === 2) {
        navigate("/career");
      } else if (activeColIndex === 3) {
        navigate("/contact");
      } else if (activeColIndex === 4) {
        navigate("/savedJobs");
      }
      return "text-center border-bottom border-danger cursor-pointer";
    }
    return "text-center border-bottom cursor-pointer";
  };

  return (
    <>
      <Row className="justify-content-center mx-auto selectTopRow">
        <Col
          style={{ border: "0.01rem solid grey" }}
          className={colClasses(0)}
          onClick={() => handleColClick(0)}
        >
          Job Search
        </Col>
        <Col
          style={{ border: "0.01rem solid grey" }}
          className={colClasses(1)}
          onClick={() => handleColClick(1)}
        >
          Profile
        </Col>
        <Col
          style={{ border: "0.01rem solid grey" }}
          className={colClasses(2)}
          onClick={() => handleColClick(2)}
        >
          Career Advice
        </Col>
        <Col
          style={{ border: "0.01rem solid grey" }}
          className={colClasses(3)}
          onClick={() => handleColClick(3)}
        >
          Contact Us
        </Col>
        <Col
          style={{ border: "0.01rem solid grey" }}
          className={colClasses(4)}
          onClick={() => handleColClick(4)}
        >
          Saved Jobs
        </Col>
      </Row>
      <div>
        <Row
          className="d-flex justify-content-center mainRow"
          style={{
            backgroundImage: `url(${MainImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Col md={8} xs={12} className="col-content mt-md-5 py-md-5">
            <p className="firstHeading">Find Your</p>
            <p className="secondHeadings">DREAM JOB</p>
            <p className="firstHeading">With us!</p>
            <p className="paraContent mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
          </Col>
          <Col md={4} xs={12} className="py-5">
            <div
              style={{
                background: "rgba(39, 39, 39, 0.16)",
                borderRadius: "15px",
                width: "100%",
                height: "430px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(39, 39, 39, 0.34)",
                  borderRadius: "15px",
                  width: "90%",
                  height: "380px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "80%" }}>
                  <Form.Group className="mb-4 ">
                    <Form.Label
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                    >
                      What
                    </Form.Label>
                    <Form.Control type="text" placeholder="Keywords" />
                  </Form.Group>
                  <Form.Group className="mb-4 ">
                    <Form.Label
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                    >
                      Classification
                    </Form.Label>
                    <Form.Control type="text" placeholder="Categories" />
                  </Form.Group>
                  <Form.Group className="mb-4 ">
                    <Form.Label
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                    >
                      Where
                    </Form.Label>
                    <Form.Control type="text" placeholder="Places" />
                  </Form.Group>
                  <div style={{ textAlign: "center" }}>
                    <Button variant="dark" onClick={() => navigate("/jobs")}>
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* carousel Start */}
      
      <div class="container Slide-Show">
        <h2 class="SlideShow-h2">
          <span class="Find">Find</span> your next employer
        </h2>
        <div class="row justify-content-center logo-container">
          {logos.map((logo, index) => (
            <div class="col-sm-2 col-4 slide" key={logo.alt}>
              <img
                class="logo-image mx-auto d-block"
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          ))}
          <hr className="hrstyle" />
        </div>
        <br />
        <div class="text-center custom">
          <IoChevronBackCircleSharp size={40} />
          <IoChevronForwardCircleSharp size={40} />
        </div>
      </div>

      {/* carousel end */}

      <Row className="mainRow cardsVisit mb-md-0 mb-5">
        <Col
          md={5}
          
          className="custom-col img7 text-center"
          style={{ backgroundColor: "#69a1c4" }}
          onClick={() => navigate("/career")}
        >
          <img
            src={Img7}
            alt="Fram"
            // style={{ width: "300px", height: "200px" }}
            className="Img77"
          />
          <p className="Career-h mt-4">Visit Career Advice</p>
        </Col>
        <Col
          md={5}
          className="custom-col text-center"
          style={{ backgroundColor: "#e55353" }}
          onClick={() => navigate("/blog")}
        >
          <h3 className="Advice-h mb-5">Visit Hiring Advice</h3>

          <img
            className="Img6 mt-5"
            src={Img6}
            alt="Frame"
            style={{ width: "350px", height: "150px" }}
          />
        </Col>
      </Row>
      {/* <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/> */}
    </>
  );
}
