import React from "react";
import Cards from "../../JobPageCard/JobPageCard";
import "./jobCards.css";

function JobCards() {
  return (
    <div className="mx-auto">
      <div className="row">
        <div className="col p-4">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default JobCards;
