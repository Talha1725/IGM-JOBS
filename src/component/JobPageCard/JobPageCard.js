import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBookmark } from "react-icons/bs";
import { Avatar } from "@mui/material";

import "./JobPageCard.css";

function TextExample() {
  return (
    <Card
      style={{
        height: "auto",
        boxShadow: "0px 0px 8px 2px rgba(0, 0, 0, 0.25)",
        // marginBottom: "30px",
      }}
      className="card px-3"
    >
      <Card.Body style={{ fontSize: "0.8rem" }} className="card-body">
        <div className="d-flex justify-content-between">
          <div className="row d-flex align-items-center">
            <div className="col-auto">
              <Avatar
                alt="Remy Sharp"
                src={Image}
                sx={{ width: 50, height: 50 }}
              />
            </div>
            <div className="col">
              <span
                className="customtile"
                style={{
                  fontFamily: "Inter",
                  //   marginLeft: "25px",
                }}
              >
                Looking for a Figma Designer
              </span>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col justify-content-end">
              <BsBookmark size={24} />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="text-center " style={{ fontSize: "0.8rem" }}>
          {" "}
          {/* Add text-center class here */}
          <div className="row mx-auto">
            <Card.Subtitle className="mb-2 col text-muted">By</Card.Subtitle>
            <Card.Subtitle className="mb-2 col text-muted">
              Posted Date
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 col text-muted">
              Budget
            </Card.Subtitle>
          </div>
          <div className=" row mx-auto">
            <div className="mb-2 col text-muted">Gogle</div>
            <div className="mb-2 col text-muted">17/08/2000</div>
            <div className="mb-2 col text-muted">$350</div>
          </div>
        </div>
        <hr />
        <div className="row d-flex justify-content-center btnsbtns">
          <Button
            className="col-auto btn"
            style={{ marginRight: "20px" }}
            variant="dark"
          >
            5 Days Ago
          </Button>
          <Button
            className="col-auto btn"
            style={{ marginRight: "20px" }}
            variant="dark"
          >
            BID 6
          </Button>
          <Button className="col-auto btn" variant="dark">
            Full Time
          </Button>
        </div>
        <hr />
        <Card.Title>Job Description</Card.Title>
        <Card.Text>
          Lorem Ipsum is simply dummy text of the printing nd typesetting
          industry. Lorem Ipsum has been e industry's standard dummy text ever
          since he 1500s. Lorem Ipsum is simply dummy text of the printing nd
          typesetting industry. Lorem Ipsum has been nd typesetting industry.
          Lorem Ipsum has been e industry's standard dummy text ever since he
          1500s.Lorem Ipsum is simply dummy text of the printing nd typesetting
          industry. Lorem Ipsum has been e industry's..
        </Card.Text>

        <div className="text-center " style={{ fontSize: "0.8rem" }}>
          {" "}
          {/* Add text-center class here */}
          <div className="row mx-auto">
            <span className=" col text-muted">Details </span>
            <span className=" col text-muted">verified</span>
            <span className=" col text-muted">Purposal</span>
          </div>
          <div className=" row mx-auto">
            <div className="mb-2 col text-muted">Gogle</div>
            <div className="mb-2 col text-muted">17/08/2000</div>
            <div className="mb-2 col text-muted">$350</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
