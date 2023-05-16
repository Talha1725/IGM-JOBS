import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./Cards/card";
import Search from "./Search/search";
import "./Blog.css";

function Blog() {
  return (
    <div className="d-flex justify-content-center custom-blog-container mx-auto">
      <Row className="custom-row-blog ">
        <Row
          id="first-row"
          className="mt-3 py-3 justify-content-center mx-auto"
        >
          <div className="first-row p-5">
            <h1 className="heading-blog">Blog</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              obcaecati hic ab soluta velit! Et, ipsum! Accusamus consequatur
              reiciendis doloremque sequi hic, dolorum unde necessitatibus
              aspernatur, ad rerum, quas illum.
            </span>
          </div>
        </Row>
        <Row
          id="second-row"
          className="justify-content-center mx-auto second-row"
        >
          <Col md={8}>
            <Card />
            <br />
            <Card />
            <br />
            <Card />
          </Col>
          <Col md={4} className="d-none d-sm-block">
            <Search />
            <br />
            <h5>Blog Categories</h5>
            <p style={{ textDecoration: "underline" }}>All Post</p>
            <p style={{ textDecoration: "underline" }}>Bussiness</p>
            <p style={{ textDecoration: "underline" }}>Law</p>
            <p style={{ textDecoration: "underline" }}>Personal inquiry</p>
            <p style={{ textDecoration: "underline" }}>Car Accident</p>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Blog;
