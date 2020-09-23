import React from "react";
import {
  useParams,
  useRouteMatch,
  useHistory,
  Switch,
  Route,
} from "react-router-dom";

export default function Highlight(props) {
  const history = useHistory();
  const { profile } = useParams();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div onClick={() => history.push(`/${profile}/story/${props.data.id}`)} className="mr-3 pointer">
        <img
          className="rounded-circle"
          style={{ width: "75px" }}
          alt="highligt_photo"
          src={props.data.cover_media_cropped_thumbnail.url}
        />
        <h6 style={{ fontWeight: 500, fontSize: "12px" }}>{props.data.title}</h6>
      </div>
    </div>
  );
}
