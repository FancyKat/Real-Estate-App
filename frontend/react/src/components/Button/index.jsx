import React from "react";
import "./Button.css";

function Button(props) {
  const { children, className } = props;

  return (
    <div className={`button ${className || ""}`}>
      <div className="label notosans-semi-bold-white-16px">{children}</div>
    </div>
  );
}

export default Button;
