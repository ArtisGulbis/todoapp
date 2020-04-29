import React from "react";

const CustomButton = ({ handleSubmit, children, type }) => {
  return (
    <button type={type} onClick={handleSubmit}>
      {children}
    </button>
  );
};

export default CustomButton;
