import React, { useEffect } from "react";
import PhotoCard from "./photocard.js";
import VideoCard from "./videocard.js";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHighlight } from "../store/actions";
import CardLoading from "./cardloading.js";

export default function Highlight(props) {
  const highlight = useSelector((store) => store.highlightReducers.highlight);
  const dispatch = useDispatch();
  const { profile } = useParams();

  useEffect(() => {
    if (!props.inPrivate)
      dispatch(getHighlight(profile));
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

  if (!highlight) {
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

    <div className="mn-profile mt-3 mb-3 overflow-auto">
      {
        highlight.length < 1 ? <h1 style={{fontWeight: 800, color: "#333333"}}>There is no highlight to see...</h1> : highlight.map(i => !i.is_video ? <PhotoCard key={i.id} data={{image_url: i.display_resources[i.display_resources.length - 1].src, id: i.id}} type="highlights" /> : <VideoCard key={i.id} data={{video_url: i.video_resources[i.video_resources.length - 1].src, id: i.id}} type="highlights" />)
      }
    </div>
  );
}
