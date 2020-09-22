import React from "react";
import Button from "react-bootstrap/Button";

export default function DisplayPicture(props) {
  return (
    <div className="mn-profile mt-3 mb-3" style={{flexDirection: "column"}}>
      <div className="mb-3">
        <img src={props.url} alt="dp" />
      </div>
      <Button
        variant="outline-dark"
        style={{ fontWeight: 700, fontSize: "16px" }}
        className="ml-3 rounded-pill shadow-sm"
        onClick={() => window.open(props.url,'_blank')}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-download mr-2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
          />
        </svg>
         Download
      </Button>
    </div>
  );
}
