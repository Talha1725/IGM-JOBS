import React from "react";
import Button from "react-bootstrap/Button";
import Cards from "./Cards/Cards";

function JobCards() {
  return (
    <div className="mx-auto">
      <div className="row d-flex p-4">
        <div className="col-sm-8">
          <span className="Search-result">Results (24)</span>
        </div>
        <div className="col-sm-4">
          <div className="d-flex justify-content-end">
            <span className="Search-result">Sort By</span>
            <Button variant="outline-secondary">Relevance</Button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Cards />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobCards;
