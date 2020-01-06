import React from "react";
import "./JobCreated.scss";

const JobCreated = props => {
  return (
    <div className="job-container">
      {props.jobCreated ? (
        <div className="job-created">
          <span>Job has been created successfully!</span>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};
export default JobCreated;
