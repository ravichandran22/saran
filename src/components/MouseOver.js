import React from "react";
import "./MouseOver.css";

const MouseOver = () => {
  return (
    <div className="container">
      <div className="svg-wrap">
        <svg style={{ width: "350", height: "70" }}>
          <rect className="box" style={{ width: "350px", height: "70px" }} />
          <h1 className="text">hello</h1>
        </svg>
      </div>
    </div>
  );
};
export default MouseOver;