import "./VideoPage.scss";
import React from "react";
import { getMovieEndpoint } from "../../utils/api-utils";
import { useEffect, useState } from "react";
import axios from "axios";

function Video({ selectedVideoId }) {



  return (
    <>
      <h2> I AM THE VIDEO ELEMENT</h2>
      <div className="video-container">
        <video
          className="video-container--video"
          poster={selectedVideoId.image}
          controls
        >
          Your browser doesn't support the video tag.
        </video>
      </div>
    </>
  );
}

export default Video;
