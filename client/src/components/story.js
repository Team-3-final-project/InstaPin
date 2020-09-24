import React, { useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Stories from './stories.js';
import { useSelector, useDispatch } from "react-redux";
import { getStory } from "../store/actions";
import CardLoading from "./cardloading.js";

export default function Story(props) {
  const story = useSelector((store) => store.storyReducers.story);
  const dispatch = useDispatch();
  const { profile } = useParams();

  useEffect(() => {
    if (!story && !props.isPrivate) {
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
      <Switch>
        <Route exact path={`/${profile}/story`}>
          <Stories story={story} />
        </Route>
      </Switch>
    </div>
  );
}
