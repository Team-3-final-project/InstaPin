import React from 'react';
import PhotoCard from './photocard.js';
import VideoCard from './videocard.js';

export default function Igtv(props) {

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
        props.igtv.length < 1 ? <h1 style={{fontWeight: 800, color: "#333333"}}>There is no IGTV to see...</h1> : props.igtv.map(x => <VideoCard key={x.id} data={x} type="igtvs" />)
      }
    </div>
  );
}
