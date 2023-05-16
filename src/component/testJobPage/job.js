import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Row, Col, Form, Button } from "react-bootstrap";
import Filter from "./Jobfilter/JobFilter";
import Jobs from "./jobCards/jobCards";

import "./jobs.css";

const useStyles = makeStyles({
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
  },
  drawerButton: {
    margin: "10px",
  },
});

function Job() {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", paddingBottom: "4rem" }}>
      <br />
      {/* Form buttons start*/}

      <div className="d-flex justify-content-center px-md-0 px-1">
        <Row className="formContainer px-md-5 py-3" noGutters>
          <Col xs={12} md={3}>
            <Form.Control
              className="custom-input py-md-0 py-2 "
              placeholder="Job Titles, keywords"
            />
          </Col>
          <Col xs={4} md={3}>
            <Form.Control
              className="custom-input py-md-0 py-2"
              placeholder="All Location"
            />
          </Col>
          <Col xs={4} md={3}>
            <Form.Control
              className="custom-input py-md-0 py-2"
              placeholder="Categories"
            />
          </Col>
          <Col xs={4} md={3}>
            <Button variant="dark" className="Search-btn py-md-0 py-2">
              Search
            </Button>
          </Col>
        </Row>
      </div>

      {/* Form buttons end*/}

      {/* body start */}
      <div className="mx-auto body-section">
        <div className="row ">
          <div className="col-md-3 d-none d-md-block searchFilters ">
            <div className="p-2">
              <Filter />
            </div>
          </div>
          <div className="col-md-9 flex-column">
            <div className="d-flex justify-content-end col-12 d-md-none">
              <Button
                variant="dark"
                color="primary"
                className={classes.drawerButton}
                onClick={handleDrawerOpen}
              >
                Filters
              </Button>
            </div>
            <div class="row ">
              <div class="col-md-12">
                <div class="jobs ">
                  <Jobs />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-md-none">
            <Drawer
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor="left"
              open={isDrawerOpen}
              onClose={handleDrawerClose}
            >
              <div className="filter">
                <Filter />
              </div>
            </Drawer>
          </div>
        </div>
      </div>

      {/* body end */}
    </div>
  );
}

export default Job;
