import React, { useEffect, useState } from "react";
import PhotoCard from "./photocard.js";
import VideoCard from "./videocard.js";
import Highlight from "./highlight.js";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Stories from './stories.js';
import HighlightStory from './highlightstory.js';
import { useSelector, useDispatch } from "react-redux";
import { getHighlight, getStory } from "../store/actions";
import CardLoading from "./cardloading.js";

export default function Story(props) {
  const story = useSelector((store) => store.storyReducers.story);
  const highlight = useSelector((store) => store.highlightReducers.highlight);
  const dispatch = useDispatch();
  const { profile } = useParams();

  useEffect(() => {
    if (!story) {
      dispatch(getStory(profile, props.highlight));
    }
  }, [profile]);

  if (props.isPrivate) {
    return (
      <div className="mn-profile mt-3 mb-3 overflow-auto">
        <h1 style={{ fontWeight: 800, color: "#333333" }}>
          Whoops the profile is private...
        </h1>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="mn-story mt-3 mb-3 overflow-auto">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {[...Array(3)].map((x, i) => (
            <div className="mr-3" key={i}>
              <div
                className="rounded-circle loading mb-2"
                style={{ width: "75px", height: "75px" }}
              ></div>
              <div
                className="rounded-pill loading"
                style={{ width: "60px", height: "15px" }}
              ></div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[...Array(6)].map((x, i) => (
            <CardLoading key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mn-story mt-3 mb-3 overflow-auto">
      {!highlight ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
        {[...Array(3)].map((x, i) => (
          <div className="mr-3" key={i}>
            <div
              className="rounded-circle loading mb-2"
              style={{ width: "75px", height: "75px" }}
            ></div>
            <div
              className="rounded-pill loading"
              style={{ width: "60px", height: "15px" }}
            ></div>
          </div>
        ))}
      </div>) : (
        highlight.map(x => <Highlight data={x} key={x.id}/>)
      )}

      <Switch>
      <Route path={`/${profile}/story/:id`}>
      <HighlightStory
      />
      </Route>
        <Route exact path={`/${profile}/story`}>
          <Stories story={story} />
        </Route>
      </Switch>
    </div>
  );
}
