import React from 'react';
import PhotoCard from './photocard.js';
import VideoCard from './videocard.js';

export default function Post(props) {

  if (props.isPrivate) {
    return (
      <div className="mn-profile mt-3 mb-3 overflow-auto">
        <h1 style={{ fontWeight: 800, color: "#333333" }}>
          Whoops the profile is private...
        </h1>
      </div>
    );
  }

  return (

    <div className="mn-profile mt-3 mb-3 overflow-auto">
      {
        props.post.length < 1 ? <h1 style={{fontWeight: 800, color: "#333333"}}>There is no post to see...</h1> : props.post.map(x => x.image_url ? <PhotoCard key={x.id} data={x} type="posts" /> : <VideoCard key={x.id} data={x} type="posts" />)
      }
    </div>
  );
}
