import React from "react";
import "./jobDetails.css";
import Jobs from "./jobCards/jobCards";
import Details from "./jobDetails/jobDetails";

function Job() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <br />

      {/* body start */}
      <div className="mx-auto custom-detail-container">
        <div className="row">
          <div className="col-md-12 flex-column">
            <div className="row">
              <div className="col-md-8">
                <div className="jobs px-md-3 px-0">
                  <Jobs />
                </div>
              </div>
              <div className="col-md-4 mb-md-5 p-md-0 px-4 ">
                <div className="description">
                  <Details />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* body end */}
    </div>
  );
}

export default Job;
