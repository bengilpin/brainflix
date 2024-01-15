import React from "react";
import "./NextVideos.scss";
import { Link } from "react-router-dom";


function NextVideos({ filteredVideos }) {
  return (
    <>
      <div className="next-video-section">
        <h2 className="next-videos--h2">NEXT VIDEOS</h2>
        {filteredVideos.map((video) => {
          return (
            <Link to={`/${video.id}`}>
              <div key={video.id} className="next-video">
                <img alt={video.title} src={video.image} className="next-video__image"></img>
                <div className="next-video__content">
                  <p className="next-video__content--title">{video.title}</p>
                  <p className="next-video__content--channel">
                    {video.channel}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default NextVideos;
