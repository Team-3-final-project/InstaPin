import React from 'react';
import PhotoCard from "./photocard.js";
import VideoCard from "./videocard.js";

export default function Stories(props) {
  return (
    <>
    {props.story.length < 1 ? (
      <h1 style={{ fontWeight: 800, color: "#333333" }}>
        There is no story to see...
      </h1>
    ) : (
      props.story.map((x) =>
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
