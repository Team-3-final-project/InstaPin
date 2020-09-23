import React, { useEffect } from 'react';
import PhotoCard from "./photocard.js";
import VideoCard from "./videocard.js";
import CardLoading from './cardloading.js';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHighlight, getStory } from "../store/actions";

export default function HighlightStory(props) {
  const { profile, id } = useParams();
  const highlightData = useSelector(store => store.highlightReducers.highlightData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHighlight(profile))
  }, [id]);

  if (!highlightData) {
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
    <>
    {highlightData.length < 1 ? (
      <h1 style={{ fontWeight: 800, color: "#333333" }}>
        There is no story to see...
      </h1>
    ) : (
      highlightData.map((x) =>
        !x.is_video ? (
          <PhotoCard
            key={x.id}
            data={{
              id: x.id,
              image_url:
                x.display_resources[x.display_resources.length - 1].src,
              uploaded_at: x.taken_at_timestamp,
            }}
          />
        ) : (
          <VideoCard
            key={x.id}
            data={{
              id: x.id,
              video_url: x.video_resources[x.video_resources.length - 1].src,
              uploaded_at: x.taken_at_timestamp,
            }}
          />
        )
      )
    )}
    </>
  )
}
