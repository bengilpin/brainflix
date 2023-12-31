import React, { useState, useEffect } from "react";
import "./Main.scss";
import videoDetails from "../../data/video-details.json";
import Video from "../Video/Video";
import CommentsRender from "../CommentsRender/CommentsRender";
import Description from "../Description/Description";

import NextVideos from "../NextVideos/NextVideos";

function Main() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (
      !selectedVideo ||
      !videoDetails.find((video) => video.id === selectedVideo.id)
    ) {
      setSelectedVideo(videoDetails[0]);
    }
  }, [selectedVideo]);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="main-container">
      {selectedVideo && <Video selectedVideo={selectedVideo} />}
      <div className="desktop__container">
        {selectedVideo && <Description selectedVideo={selectedVideo} />}
        {selectedVideo && <CommentsRender selectedVideo={selectedVideo} />}
        <h3 className="video-thumbnails-section--h3">NEXT VIDEOS</h3>
        {videoDetails
          .filter((video) => video.id !== selectedVideo?.id)
          .map((video) => (
            <NextVideos
              key={video.id}
              video={video}
              onSelectVideo={handleSelectVideo}
            />
          ))}
      </div>
    </div>
  );
}

export default Main;
