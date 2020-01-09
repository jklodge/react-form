import React from "react";
export const ErrorValidation = ({ errorValidation }) => (
  <div className="formErrors">
    {Object.keys(errorValidation).map((fieldName, i) => {
      if (errorValidation[fieldName].length > 0) {
        return (
          <p key={i}>
            {fieldName} {errorValidation[fieldName]}
          </p>
        );
      } else {
        return "";
      }
    })}
  </div>
);
