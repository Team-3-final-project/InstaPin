import React, { useState, useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  useHistory,
  Switch,
  Route,
} from "react-router-dom";
import "../pages/Profile.css";
import { getProfile } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import NavbarHome from "../components/navbar.js";
import DisplayPicture from "../components/displaypicture.js";
import Button from "react-bootstrap/Button";
import CardLoading from "./cardloading.js";

export default function Loading() {
  return (
    <div
      style={{ backgroundColor: "#FAFAFA" }}
      className="vh-100 overflow-auto"
    >
      <Container fluid="sm">
        <div className="hd-profile mt-3 mb-3">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="mr-3">
              <div
                className="rounded-circle loading"
                style={{ width: "75px", height: "75px" }}
              ></div>
            </div>
            <div>
              <div
                className="rounded-pill loading mb-2"
                style={{ width: "150px", height: "15px" }}
              ></div>
              <div
                className="rounded-pill loading"
                style={{ width: "70px", height: "15px" }}
              ></div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="grid-profile ml-5 mb-2">
              <div
                className="rounded-pill loading"
                style={{ width: "60px", height: "25px" }}
              ></div>
              <div
                className="rounded-pill loading"
                style={{ width: "120px", height: "25px" }}
              ></div>
              <div
                className="rounded-pill loading"
                style={{ width: "60px", height: "25px" }}
              ></div>
              <div
                className="rounded-pill loading"
                style={{ width: "60px", height: "15px" }}
              ></div>
              <div
                className="rounded-pill loading"
                style={{ width: "120px", height: "15px" }}
              ></div>
              <div
                className="rounded-pill loading"
                style={{ width: "60px", height: "15px" }}
              ></div>
            </div>
            <div
              className="rounded-pill loading ml-5"
              style={{ width: "290px", height: "35px" }}
            ></div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            disabled
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            Posts
          </Button>
          <Button
            disabled
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            Stories
          </Button>
          <Button
            disabled
            variant="outline-dark"
            style={{ fontWeight: 700, fontSize: "16px" }}
            className="ml-3 rounded-pill shadow-sm"
          >
            IGTV
          </Button>
        </div>
        <div className="mn-profile mt-3 mb-3 overflow-auto">
          {[...Array(6)].map((x, i) => (
            <CardLoading key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
