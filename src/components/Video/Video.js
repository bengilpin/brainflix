import "./Video.scss";
import React from "react";

function Video({ selectedVideo }) {
  return (
    <>
    <div className="video-container">
      {selectedVideo ? (
        <video
          className="video-container--video"
          
          poster={selectedVideo.image}
          controls
          
        >
          Your browser doesn't support the video tag.
        </video>
      ) : (
        <p>No video selected</p>
      )}
    </div>
    </>
  );
}

export default Video;
