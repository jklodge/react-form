import React from "react";

export const SuccessPage = ({ name }) => (
  <div className="success-page">
    <h1>Success!</h1>
    <p>
      Thanks <span style={{ textTransform: "capitalize" }}>{name}</span> for
      signing up, you are now ready to being your search!
    </p>
  </div>
);
