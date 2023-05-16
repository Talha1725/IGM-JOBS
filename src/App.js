import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  // useNavigate,
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Jobs from "./component/testJobPage/job";
import Details from "./component/JobDetails/JobDetails";
import Profile from "./component/ProfilePage/profile";
import Post from "./component/JobPost/JobPost";
import JobType from "./component/JobType/JobType";
import Career from "./component/Career/Career";
import Blog from "./component/Blog/Blog";
import LandingPage from "./component/LandingPage/LandingPage/LandingPage";
import SignIn from "./component/Sign-In/SignIn";
import Contactheader from "./component/contact-us/contactheader";
import Applied from "./component/Applied-Jobs/AppliedJobs-page";
// my Code Talha Noor
import ApplyDetails from "./component/ApplyDetails/ApplyDetails";
import Preview from "./component/PreviewPostedJob/Preview";
import CandidatesList from "./component/Candidates-List/candidatelist";
import PostJob from "./component/postJob/postJob";
import Footer from "./component/Footer/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./logo.png";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./App.css";

function App() {
  // const navigate = useNavigate();

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg" className="px-2">
          <div className="d-flex justify-content-between align-items-center ">
            <Navbar.Brand as={Link} to="/">
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "70px", height: "60px" }}
              />
            </Navbar.Brand>
            <div className="d-flex ms-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="px-2">
            {/* <Nav className="me-auto">
              <Nav.Link as={Link} to="/jobs">
                Jobs
              </Nav.Link>
              <Nav.Link as={Link} to="/details">
                Details
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/post">
                Post
              </Nav.Link>
              <Nav.Link as={Link} to="/jobtype">
                Job Type
              </Nav.Link>
              <Nav.Link as={Link} to="/career">
                Career
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/ApplyDetails">
                ApplyDetails
              </Nav.Link>
              <Nav.Link as={Link} to="/Preview">
                Preview
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/savedJobs">
                Saved Jobs
              </Nav.Link>
              <Nav.Link as={Link} to="/CandidatesList">
                Candidates List
              </Nav.Link>
              <Nav.Link as={Link} to="/PostJob">
                Post Job
              </Nav.Link>
            </Nav> */}
            <div className="d-flex align-items-center justify-content-end ms-auto">
              <Link
                to="/signIn"
                style={{ color: "red", textDecoration: "none" }}
              >
                {" "}
                <strong>Login</strong>
              </Link>
              <Link to="/PostJob">
                <Button variant="dark" className="ms-3">
                  Employer Site
                </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/details" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/jobtype" element={<JobType />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contactheader />} />
          <Route path="/savedJobs" element={<Applied />} />
          <Route path="/ApplyDetails" element={<ApplyDetails />} />
          <Route path="/Preview" element={<Preview />} />
          <Route path="/CandidatesList" element={<CandidatesList />} />
          <Route path="/PostJob" element={<PostJob />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
