import React from "react";
import "./Image.css";

function Image(props) {
  const { src } = props;

  return <img className="img" src={src} alt="" />;
}

export default Image;
