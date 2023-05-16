import React from "react";
import { Button } from "react-bootstrap";

export default function cards({ image, cardsPara, cardsHeading }) {
  return (
    <div className="text-center cardpost py-md-0 py-4">
      <div className="p-2">
        <h6 className="py-2 cardHeadingCard">SINGLE JOB POST</h6>
        <p className="cardcontents px-md-4 px-5 py-md-3 py-3">
          Instantly reach an audience of unique, engaged and skilled candidates
          actively searching for their next dream job.
        </p>
        <Button variant="dark" className="btnbtn mt-md-1 mb-md-3">Visit</Button>
      </div>
    </div>
  );
}
