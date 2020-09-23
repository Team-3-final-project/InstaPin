import React from "react";
import "./photocard.css";
import Button from "react-bootstrap/Button";

export default function PhotoCard(props) {
  const { image_url, likes, uploaded_at } = props.data;
  return (
    <div className="photo-card shadow-sm mr-2 mt-2 ml-2 mb-2">
      <div className="photo mb-3">
        <img src={image_url} alt="post" />
      </div>
      <div className="d-flex justify-content-center">
      <Button
        variant="light"
        style={{ fontWeight: 700, fontSize: "16px" }}
        className="ml-2 rounded-pill shadow-sm"
      >
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          className="bi bi-heart-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </Button>
      <Button
        onClick={() => window.open(image_url, "_blank")}
        variant="light"
        style={{ fontWeight: 700, fontSize: "16px" }}
        className="ml-2 rounded-pill shadow-sm"
      >
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          className="bi bi-download"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
          />
          <path
            fillRule="evenodd"
            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
          />
        </svg>
      </Button>
      </div>
    </div>
  );
}
