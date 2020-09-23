import React from "react";
import "./photocard.css";
import Button from "react-bootstrap/Button";

export default function CardLoading() {
  return (
    <div className="photo-card shadow-sm mr-2 mt-2 ml-2 mb-2">
      <div className="photo mb-3">
        <div
          className="loading-card loading"
          style={{ width: "20rem", height: "23rem" }}
        ></div>
      </div>
      <div className="d-flex justify-content-center">
        <div
          className="rounded-pill loading mr-2"
          style={{ width: "60px", height: "50px" }}
        ></div>
        <div
          className="rounded-pill loading"
          style={{ width: "60px", height: "50px" }}
        ></div>
      </div>
    </div>
  );
}
