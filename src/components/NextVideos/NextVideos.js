import React from "react";
import "./NextVideos.scss";
import { Link } from "react-router-dom";
import { getMovieEndpoint } from "../../utils/api-utils";

function NextVideos({ filteredVideos }) {
  return (
    <>
      {filteredVideos.map((video) => {
        return (
          <div key={video.id} className="next-video">
            <Link to={`/${video.id}`}>
              <img src={video.image} className="next-video__image"></img>
              <div className="next-video__content">
                <h2>{video.title}</h2>
                <h3>{video.channel}</h3>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default NextVideos;
