import React from 'react';
import PhotoCard from './photocard.js';
import VideoCard from './videocard.js';

export default function Story(props) {

  return (

    <div className="mn-profile mt-3 mb-3 overflow-auto">
      {
        props.story.length < 1 ? <h1 style={{fontWeight: 800, color: "#333333"}}>There is no post to see...</h1> : props.story.map(x => x.image_url ? <PhotoCard key={x.id} data={x} /> : <VideoCard key={x.id} data={x} />)
      }
    </div>
  );
}
