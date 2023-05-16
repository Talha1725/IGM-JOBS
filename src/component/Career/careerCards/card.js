import Card from "react-bootstrap/Card";
import placeholder from "./placeholder.png";
import "./card.css";
function BasicExample() {
  return (
    <>
      <Card
        style={{
          width: "100%",
          boxShadow: "0px 1px 14px rgba(0, 0, 0, 0.25)",
          borderRadius: "7px",
          height: "100%",
          display: "flex", // Add display property to enable flexbox
          flexDirection: "column", // Set flex direction to column
          justifyContent: "flex-start", // Set vertical alignment to flex-start
        }}
        className="text-center"
      >
        <Card.Img
          src={placeholder}
          style={{ width: "100%", height: "auto", maxHeight: "200px" }}
        />
        <Card.Body style={{ flex: "1", padding: "10px", marginBottom: "10px" }}>
          {" "}
          {/* Update styles for Card.Body */}
          <span
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            By Ali Khan
          </span>
          <br />
          <span
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "17px",
              lineHeight: "21px",
              color: "#000000",
            }}
          >
            What Toxic Positivity Looks Like at Work—and How to Deal With It
          </span>
          <p
            style={{
              textDecoration: "underline",
              margin: "10px 0",
              fontSize: "15px",
            }}
          >
            Exploring
          </p>
        </Card.Body>
      </Card>
    </>
  );
}

export default BasicExample;
